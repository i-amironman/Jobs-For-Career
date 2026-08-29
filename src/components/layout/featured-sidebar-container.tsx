'use client';

import { useEffect, useState } from 'react';
import { useCountry } from '@/context/country-context';
import FeaturedSidebar from '@/components/layout/featured-sidebar';
import type { PostDocument } from '@/lib/types/post';

interface FeaturedSidebarContainerProps {
  initialPosts?: PostDocument[];
}

export default function FeaturedSidebarContainer({ initialPosts = [] }: FeaturedSidebarContainerProps) {
  const { country } = useCountry();
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const params = new URLSearchParams({ featured: 'true' });
    params.set('country', country);
    fetch(`/api/posts?${params}`)
      .then((r) => r.json())
      .then((data) => setPosts(data.posts ?? []))
      .catch(() => setPosts([]));
  }, [country]);

  return <FeaturedSidebar posts={posts} />;
}
