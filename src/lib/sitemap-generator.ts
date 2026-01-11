import { parseContentFiles } from './content-parser';

export function generateSitemap(): string {
  const baseUrl = 'https://jobsforcareer.com';
  
  const staticPages = [
    '',
    '/jobs',
    '/internships',
    '/scholarships',
    '/govt-jobs',
    '/about'
  ];

  const categories = ['jobs', 'internships', 'scholarships', 'govt-jobs'];
  const dynamicPages: string[] = [];

  categories.forEach(category => {
    const posts = parseContentFiles(category);
    posts.forEach(post => {
      dynamicPages.push(`/${category}/${post.slug}`);
    });
  });

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return sitemap;
}