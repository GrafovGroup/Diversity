/** Reclassify notices against their published deadline, including during a long-open visit. */
export function updateTenderArchive(
  desk: HTMLElement,
  now: number,
): number | null {
  const current = desk.querySelector<HTMLElement>('[data-current]')!;
  const archived = desk.querySelector<HTMLElement>('[data-closed]')!;
  let next: number | null = null;
  for (const card of desk.querySelectorAll<HTMLElement>('[data-closes]')) {
    const remaining = Date.parse(card.dataset.closes!) - now;
    const destination = remaining > 0 ? current : archived;
    if (card.parentElement !== destination) destination.append(card);
    if (remaining > 0)
      next = next === null ? remaining : Math.min(next, remaining);
  }
  desk.querySelector<HTMLElement>('[data-empty]')!.hidden =
    current.childElementCount > 0;
  desk.querySelector<HTMLElement>('[data-archive]')!.hidden =
    archived.childElementCount === 0;
  return next;
}
