// Only a canonical public page path is retained for the current tab.
const key = 'diversity-landing-page';
const pagePath = () =>
  new URL(
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')!.href,
  ).pathname;
export function landingPage() {
  const current = pagePath();
  try {
    const previous = sessionStorage.getItem(key);
    if (previous && /^\/(en|fr)\/(?:[a-z0-9-]+\/)*$/.test(previous))
      return previous;
    sessionStorage.setItem(key, current);
  } catch {
    /* Storage may be disabled; submitting still works. */
  }
  return current;
}
