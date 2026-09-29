import { cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const clientDir = path.join(projectRoot, 'dist', 'client');
const serverEntry = path.join(projectRoot, 'dist', 'server', 'index.js');
const outputDir = path.join(projectRoot, 'dist-netlify');
const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://rashadthehelper.netlify.app';

const routes = [
  '/',
  '/about',
  '/services',
  '/service-details',
  '/portfolio',
  '/portfolio-details',
  '/pricing',
  '/offers',
  '/shop',
  '/product-details',
  '/blog',
  '/blog-details',
  '/contact',
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const worker = (await import(pathToFileURL(serverEntry).href)).default;
const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.woff2', 'font/woff2'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.gif', 'image/gif'],
  ['.woff', 'font/woff'],
  ['.ttf', 'font/ttf'],
]);

const env = {
  ASSETS: {
    async fetch(request) {
      const url = new URL(request.url);
      const relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, '');
      const filePath = path.join(clientDir, relativePath);
      try {
        const details = await stat(filePath);
        if (!details.isFile()) return new Response('Not found', { status: 404 });
        const body = await readFile(filePath);
        return new Response(body, { headers: { 'content-type': mimeTypes.get(path.extname(filePath)) || 'application/octet-stream' } });
      } catch {
        return new Response('Not found', { status: 404 });
      }
    },
  },
};

const executionContext = { waitUntil() {}, passThroughOnException() {} };

async function render(route, outputPath, expectedStatus = 200) {
  const response = await worker.fetch(new Request(new URL(route, origin)), env, executionContext);
  const contentType = response.headers.get('content-type') || '(none)';
  if (response.status !== expectedStatus || !contentType.includes('text/html')) {
    // A 500 here means the route threw while server-rendering. The status
    // alone says nothing useful, so surface the response body — that is where
    // the server-side stack trace ends up.
    let body = '';
    try {
      body = (await response.text()).slice(0, 4000);
    } catch (error) {
      body = `<could not read response body: ${error.message}>`;
    }
    throw new Error(
      `Could not export ${route}: received ${response.status}, content-type ${contentType}\n`
      + `----- response body -----\n${body}\n-------------------------`,
    );
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, await response.text(), 'utf8');
}

// Render every route before failing, so one build shows whether a break is
// isolated to a single page or affects the whole site.
const failures = [];

for (const route of routes) {
  const outputPath = route === '/'
    ? path.join(outputDir, 'index.html')
    : path.join(outputDir, route.slice(1), 'index.html');
  try {
    await render(route, outputPath);
  } catch (error) {
    failures.push(error.message);
  }
}

try {
  await render('/page-not-found', path.join(outputDir, '404.html'), 404);
} catch (error) {
  failures.push(error.message);
}

if (failures.length > 0) {
  console.error(`\nExport failed for ${failures.length} route(s):\n`);
  for (const failure of failures) console.error(`${failure}\n`);
  process.exit(1);
}

console.log(`Exported ${routes.length} pages and a 404 page to dist-netlify.`);
