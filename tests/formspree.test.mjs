import test from 'node:test';
import assert from 'node:assert/strict';
import { approvedFormEndpoint } from '../src/lib/intake.mjs';
import { submitEnquiry } from '../src/lib/formspree.mjs';

test('AJAX sends bilingual enquiry fields and requests JSON acceptance', async () => {
  const body = new FormData();
  for (const [key, value] of Object.entries({ email:'qa@example.test', message:'Évaluation à Montréal', language:'fr', service:'accessibility', intake:'assessment', consent:'agreed' })) body.set(key, value);
  await submitEnquiry(approvedFormEndpoint, body, { fetchImpl: async (url, request) => {
    assert.equal(url, 'https://formspree.io/f/xaeepeno');
    assert.equal(request.method, 'POST');
    assert.equal(request.headers.Accept, 'application/json');
    assert.equal(request.body, body);
    assert.equal(request.body.get('message'), 'Évaluation à Montréal');
    assert.equal(request.signal.aborted, false);
    return { ok:true, json:async () => ({ ok:true }) };
  } });
});

test('disabled and untrusted endpoints never call the provider', async () => {
  for (const endpoint of ['', 'https://other.example/f/abc']) {
    let called = false;
    await assert.rejects(submitEnquiry(endpoint, new FormData(), { fetchImpl: async () => { called=true; } }));
    assert.equal(called, false);
  }
});

for (const [name, response] of [
  ['HTTP rejection', {ok:false,json:async () => ({ok:true})}],
  ['validation error', {ok:true,json:async () => ({errors:[{field:'email',message:'Invalid email'}]})}],
  ['unconfirmed acceptance', {ok:true,json:async () => ({ok:false})}],
  ['empty JSON', {ok:true,json:async () => null}],
  ['non-JSON response', {ok:true,json:async () => {throw new SyntaxError('Invalid JSON');}}],
]) test(`${name} cannot produce a successful submission`, async () => {
  await assert.rejects(submitEnquiry(approvedFormEndpoint, new FormData(), {fetchImpl:async () => response}));
});

test('network failure retains the submitted data for email fallback', async () => {
  const body = new FormData();body.set('message','Keep this project enquiry.');
  await assert.rejects(submitEnquiry(approvedFormEndpoint, body, {fetchImpl:async () => {throw new TypeError('Offline');}}));
  assert.equal(body.get('message'),'Keep this project enquiry.');
});

test('an unresponsive request is aborted rather than reported as sent', async () => {
  let aborted = false;
  await assert.rejects(submitEnquiry(approvedFormEndpoint, new FormData(), {
    timeoutMs:5,
    fetchImpl:async (_url, {signal}) => new Promise((_resolve,reject) => {
      signal.addEventListener('abort',()=>{aborted=true;reject(new DOMException('Timed out','AbortError'));},{once:true});
    }),
  }), {name:'AbortError'});
  assert.equal(aborted,true);
});
