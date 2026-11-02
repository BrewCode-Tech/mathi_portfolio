// Prints /resume/ from the built site to a real PDF, so the download has no
// browser-added headers, footers, dates or page numbers.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { chromium } from 'playwright';

const { default: config } = await import('../astro.config.mjs');
const BASE = config.base ?? '/';
const DIST = new URL('../dist/', import.meta.url).pathname;
const OUT = join(DIST, 'Mathivanan-S-Resume.pdf');
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png' };

const server = createServer(async (req, res) => {
  // Pages are built for BASE; map it back onto dist/.
  const pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let path = join(DIST, pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname);
  try {
    if ((await stat(path)).isDirectory()) path = join(path, 'index.html');
    res.writeHead(200, { 'content-type': TYPES[extname(path)] ?? 'application/octet-stream' });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);

const { port } = server.address();
// CI installs Playwright's Chromium; locally fall back to the installed Chrome.
const browser = await chromium.launch().catch(() => chromium.launch({ channel: 'chrome' }));
const page = await browser.newPage();
await page.goto(`http://localhost:${port}${BASE}resume/`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.emulateMedia({ media: 'print' });
await page.pdf({ path: OUT, preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false });
await browser.close();
server.close();
console.log('resume PDF →', OUT);
