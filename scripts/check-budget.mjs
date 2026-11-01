import { readdir, readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map(async (entry) => {
        const path = join(directory, entry.name);
        return entry.isDirectory()
          ? walk(path)
          : [{ path, bytes: (await stat(path)).size }];
      }),
    )
  ).flat();
}

const files = await walk('dist');
const bytesFor = (extensions) =>
  files.filter((file) => extensions.includes(extname(file.path)));
const sum = (values) => values.reduce((total, file) => total + file.bytes, 0);
const max = (values) => Math.max(0, ...values.map((file) => file.bytes));
const metrics = {
  totalStaticBytes: sum(files),
  largestHtmlBytes: max(bytesFor(['.html'])),
  totalJavaScriptBytes: sum(bytesFor(['.js'])),
  totalCssBytes: sum(bytesFor(['.css'])),
  largestImageBytes: max(bytesFor(['.webp', '.jpg', '.png', '.svg'])),
  totalFontBytes: sum(bytesFor(['.woff2'])),
};
const budgets = {
  totalStaticBytes: 20 * 1024 * 1024,
  largestHtmlBytes: 100 * 1024,
  totalJavaScriptBytes: 80 * 1024,
  totalCssBytes: 60 * 1024,
  largestImageBytes: 400 * 1024,
  totalFontBytes: 400 * 1024,
};
for (const [key, value] of Object.entries(metrics)) {
  if (value > budgets[key])
    throw new Error(`${key}: ${value} bytes exceeds ${budgets[key]}`);
}
const home = await readFile('dist/en/index.html', 'utf8');
if (/<(?:script|img)\b[^>]*src=["']https?:\/\//.test(home)) {
  throw new Error(
    'The homepage must not require third-party image or script requests.',
  );
}
await mkdir('artifacts', { recursive: true });
await writeFile(
  'artifacts/build-metrics.json',
  JSON.stringify({ metrics, budgets }, null, 2) + '\n',
);
console.log(JSON.stringify(metrics, null, 2));
console.log('All static asset budgets passed.');
