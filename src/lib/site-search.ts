type Entry = { path: string; label: string; keywords: string };
const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

export function enableSearch(
  dialog: HTMLDialogElement,
  input: HTMLInputElement,
) {
  const locale = dialog.dataset.locale!;
  const en = locale === 'en';
  const list = dialog.querySelector<HTMLUListElement>('ul')!;
  const empty = dialog.querySelector<HTMLElement>('.option-search-empty')!;
  const status = dialog.querySelector<HTMLElement>('[data-search-status]')!;
  const shortcuts = [...list.children];
  let index: Promise<Entry[]> | undefined;
  let revision = 0;
  async function render() {
    const current = ++revision;
    const query = normalize(input.value);
    empty.hidden = true;
    status.textContent = '';
    if (!query) {
      list.replaceChildren(...shortcuts);
      return;
    }
    const words = query.split(' ');
    try {
      index ??= fetch(dialog.dataset.index!).then((response) => {
        if (!response.ok) throw new Error('Search unavailable');
        return response.json();
      });
      const entries = await index!;
      if (current !== revision) return;
      const matches = entries
        .map((entry) => {
          const label = normalize(entry.label);
          const keywords = normalize(entry.keywords);
          const haystack = label + ' ' + keywords;
          const score =
            label === query
              ? 100
              : label.startsWith(query)
                ? 70
                : label.includes(query)
                  ? 50
                  : keywords.includes(query)
                    ? 30
                    : 10;
          return {
            entry,
            score: words.every((word) => haystack.includes(word)) ? score : 0,
          };
        })
        .filter((hit) => hit.score > 0)
        .sort(
          (a, b) =>
            b.score - a.score ||
            a.entry.label.localeCompare(b.entry.label, locale),
        );
      list.replaceChildren(
        ...matches.map(({ entry }) => {
          const link = document.createElement('a');
          link.href = '/' + locale + '/' + (entry.path ? entry.path + '/' : '');
          link.textContent = entry.label;
          const item = document.createElement('li');
          item.append(link);
          return item;
        }),
      );
      empty.hidden = matches.length !== 0;
      status.textContent = en
        ? 'Results: ' + matches.length
        : 'Résultats : ' + matches.length;
    } catch {
      index = undefined;
      if (current !== revision) return;
      list.replaceChildren(...shortcuts);
      status.textContent = en
        ? 'Search is unavailable.'
        : 'La recherche est indisponible.';
      empty.textContent = en
        ? 'Search is temporarily unavailable. Browse the links below.'
        : 'La recherche est temporairement indisponible. Consultez les liens ci-dessous.';
      empty.hidden = false;
    }
  }
  const noMatches = empty.textContent;
  input.addEventListener('input', () => {
    empty.textContent = noMatches;
    void render();
  });
}
