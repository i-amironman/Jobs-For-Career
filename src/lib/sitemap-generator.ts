import { getPublishedPosts } from './post-service';
import { POST_TYPE_ROUTES, type PostType } from './types/post';

export async function generateSitemap(): Promise<string> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jobsforcareer.com';

  const staticPages = [
    '',
    '/jobs',
    '/freshers',
    '/internships',
    '/scholarships',
    '/govt-jobs',
    '/competitions',
    '/mock-tests',
    '/mock-interview',
    '/mentorship',
    '/prep-zone',
    '/my-activity',
    '/about',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
  ];

  const dynamicPages: string[] = [];

  try {
    const types = Object.keys(POST_TYPE_ROUTES) as PostType[];
    for (const type of types) {
      const posts = await getPublishedPosts(type);
      for (const post of posts) {
        dynamicPages.push(`${POST_TYPE_ROUTES[type]}/${post.slug}`);
      }
    }
  } catch {
    // ponytail: sitemap works without DB; static pages only
  }

  const allPages = [...staticPages, ...dynamicPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;
}
