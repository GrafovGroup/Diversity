import { validateEndpoint } from './intake.mjs';

/** Confirm provider acceptance; this does not establish delivery to an email inbox. */
export async function submitEnquiry(endpoint, body, { fetchImpl = globalThis.fetch, timeoutMs = 15000 } = {}) {
  if (!validateEndpoint(endpoint)) throw new Error('Form submission is disabled');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(endpoint, {
      method: 'POST',
      body,
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    const result = await response.json();
    if (!response.ok || result?.ok !== true) throw new Error('Submission not confirmed');
  } finally {
    clearTimeout(timeout);
  }
}
