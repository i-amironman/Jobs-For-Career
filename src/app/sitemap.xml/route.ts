import { NextResponse } from 'next/server';
import { generateSitemap } from '@/lib/sitemap-generator';

export async function GET() {
  const sitemap = await generateSitemap();
  
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}