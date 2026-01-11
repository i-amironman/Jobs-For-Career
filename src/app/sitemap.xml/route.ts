import { NextResponse } from 'next/server';
import { generateSitemap } from '@/lib/sitemap-generator';

export function GET() {
  const sitemap = generateSitemap();
  
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}