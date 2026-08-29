import { getFeaturedPosts } from '@/lib/post-service';
import { resolveCountry } from '@/lib/country-server';
import PlatformShell from '@/components/layout/platform-shell';
import type { PostDocument } from '@/lib/types/post';

export default async function PlatformLayout({ children }: { children: React.ReactNode }) {
  let featuredPosts: PostDocument[] = [];
  try {
    const country = await resolveCountry();
    featuredPosts = await getFeaturedPosts(country);
  } catch {
    featuredPosts = [];
  }

  return (
    <PlatformShell featuredPosts={featuredPosts}>
      {children}
    </PlatformShell>
  );
}
