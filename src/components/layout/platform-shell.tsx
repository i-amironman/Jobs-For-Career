'use client';

import { useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import AppSidebar from '@/components/layout/app-sidebar';
import AppTopbar from '@/components/layout/app-topbar';
import FeaturedSidebarContainer from '@/components/layout/featured-sidebar-container';
import ThemeSwitcher from '@/components/theme-switcher';
import CookieConsent from '@/components/cookie-consent';
import { Icons } from '@/components/ui/icons';
import type { PostDocument } from '@/lib/types/post';

const DETAIL_PAGE_RE = /^\/(jobs|internships|scholarships|govt-jobs|competitions|mock-tests|mock-interview|mentorship|prep-zone)\/[^/]+$/;

interface PlatformShellProps {
  children: ReactNode;
  featuredPosts?: PostDocument[];
  searchPlaceholder?: string;
  showFeatured?: boolean;
}

export default function PlatformShell({
  children,
  featuredPosts = [],
  searchPlaceholder,
  showFeatured = true,
}: PlatformShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isDetailPage = DETAIL_PAGE_RE.test(pathname);

  return (
    <div className="min-h-screen" style={{ background: 'var(--page-bg)' }}>
      <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-h-screen flex-col lg:pl-[260px] min-w-0">
        {!isDetailPage && (
          <AppTopbar
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
            searchPlaceholder={searchPlaceholder}
          />
        )}

        {isDetailPage && (
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden fixed top-3 left-3 z-50 p-2.5 rounded-xl bg-white border border-border/60 shadow-md text-foreground"
            aria-label="Open menu"
          >
            <Icons.Menu className="h-5 w-5" />
          </button>
        )}

        <div
          className={
            isDetailPage
              ? 'flex flex-1 w-full px-2 py-2 lg:px-4 lg:py-3'
              : 'flex flex-1 gap-3 px-2 py-2 lg:px-3 lg:py-2.5 w-full'
          }
        >
          <main
            className={
              isDetailPage
                ? 'flex-1 min-w-0 page-enter'
                : 'flex-1 min-w-0 content-panel page-enter'
            }
          >
            {children}
          </main>
          {showFeatured && !isDetailPage && <FeaturedSidebarContainer initialPosts={featuredPosts} />}
        </div>
      </div>

      <ThemeSwitcher />
      <CookieConsent />
    </div>
  );
}
