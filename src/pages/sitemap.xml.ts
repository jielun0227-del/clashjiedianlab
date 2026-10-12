import { getCollection } from 'astro:content';
import { entryPath, isSectionIndex } from '../lib/routes';
import { airports } from '../data/airports';

export async function GET() {
  const entries = await getCollection('blog', ({ data }) => data.draft !== true);
  const pages = entries.filter((entry) => !entry.data.sectionIndex && !isSectionIndex(entry.id));
  const fixed = ['', 'articles/', 'docs/', 'ai-guide/', 'recommend/', 'faq/', 'reviews/', 'airports/'];
  const airportReviews = airports.map((airport) => `reviews/${airport.slug}/`);
  const urls = [...new Set([...fixed, ...airportReviews, ...pages.map((entry) => `${entryPath(entry)}/`)])];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>https://clashjiedianlab.com/${url}</loc><changefreq>${url === '' ? 'daily' : 'weekly'}</changefreq><priority>${url === '' ? '1.0' : url.split('/').length <= 2 ? '0.8' : '0.6'}</priority></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
