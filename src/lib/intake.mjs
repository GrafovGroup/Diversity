// Owner-approved public form identifier. An explicit empty build override disables sending.
export const approvedFormEndpoint = 'https://formspree.io/f/xaeepeno';
export function validateEndpoint(value = '') {
  if (!value) return '';
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(value)) throw new Error('PUBLIC_FORM_ENDPOINT must be an approved https://formspree.io/f/ endpoint.');
  return value;
}
export function leadRecord(entries, context = {}) {
  const allowed = ['name','email','organization','audience','service','province','city','timeline','budget','deadline','deadline_timezone','reference','public_link','participants','format','assessment_scope','message','consent'];
  const record = {schema_version:1,created_at:new Date().toISOString(),...context};
  for (const key of allowed) { const value=entries.get(key); if(typeof value==='string'&&value.trim()) record[key]=value.trim(); }
  return record;
}
export function recordText(record) {
  return Object.entries(record).map(([key,value])=>`${key}: ${value}`).join('\n');
}
export function createMailto(record, subject) {
  return 'mailto:info@diversity.ca?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(recordText(record));
}
