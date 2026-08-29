export async function GET() {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'pub-0000000000000000';
  const body = `google.com, ${publisherId.replace('ca-', '')}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
