import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Keep the four-page draft usable as one offline file (HashRouter in main.tsx).
const types = { '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff': 'font/woff', '.woff2': 'font/woff2' };
async function collect(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? collect(path.join(dir, entry.name)) : path.join(dir, entry.name)))).flat();
}
const assets = [];
for (const file of await collect('dist')) {
  const type = types[path.extname(file)];
  if (type) assets.push(['/' + path.relative('dist', file).split(path.sep).join('/'), `data:${type};base64,${(await readFile(file)).toString('base64')}`]);
}
function embed(text) {
  for (const [url, data] of assets) text = text.replaceAll(url, data);
  return text;
}
let html = await readFile('dist/index.html', 'utf8');
for (const match of [...html.matchAll(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g)]) {
  const js = embed(await readFile(path.join('dist', match[1].replace(/^\//, '')), 'utf8'));
  html = html.replace(match[0], () => `<script type="module">${js.replaceAll('</script', '<\\/script')}</script>`);
}
for (const match of [...html.matchAll(/<link\b[^>]*href="([^"]+\.css)"[^>]*>/g)]) {
  const css = embed(await readFile(path.join('dist', match[1].replace(/^\//, '')), 'utf8'));
  html = html.replace(match[0], () => `<style>${css}</style>`);
}
html = embed(html);
await writeFile('../aretha-preview.html', html);
console.log('Created ../aretha-preview.html — four routes, embedded local photos and fonts.');
