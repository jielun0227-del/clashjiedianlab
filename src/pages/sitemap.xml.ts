import { getCollection } from 'astro:content';
import { entryPath, isSectionIndex } from '../lib/routes';

export async function GET() {
  const entries = await getCollection('blog', ({ data }) => data.draft !== true);
  const pages = entries.filter((entry) => !entry.data.sectionIndex && !isSectionIndex(entry.id));
  const fixed = ['', 'articles/', 'docs/', 'recommend/', 'faq/', 'reviews/'];
  const urls = [...fixed, ...pages.map((entry) => `${entryPath(entry)}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>https://clashjiedianlab.com/${url}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
