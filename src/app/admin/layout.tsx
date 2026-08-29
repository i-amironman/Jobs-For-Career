'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';

const ADMIN_NAV = [
  { href: '/admin', label: 'Dashboard', icon: Icons.Home },
  { href: '/admin/posts', label: 'All Posts', icon: Icons.FileText },
  { href: '/admin/posts/new', label: 'Create Post', icon: Icons.Plus },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === '/admin/login';

  if (isLogin) {
    return <div className="min-h-screen" style={{ background: 'var(--page-bg)' }}>{children}</div>;
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--page-bg)' }}>
      <aside className="hidden md:flex fixed top-0 left-0 z-40 h-screen w-64 flex-col bg-white border-r border-border/60 sidebar-rail">
        <div className="p-5 border-b border-border/60 shrink-0">
          <Link href="/admin" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Icons.Settings className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-sm block group-hover:text-primary transition-colors">Admin Portal</span>
              <span className="text-[10px] text-muted-foreground">JobsForCareer</span>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto custom-scrollbar">
          {ADMIN_NAV.map(({ href, label, icon: Icon }) => {
            const active =
              href === '/admin'
                ? pathname === '/admin'
                : href === '/admin/posts/new'
                  ? pathname === '/admin/posts/new'
                  : href === '/admin/posts'
                    ? pathname === '/admin/posts' || /^\/admin\/posts\/[a-f0-9]+$/.test(pathname)
                    : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm',
                  active ? 'nav-item-active' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border/60 shrink-0">
          <Link
            href="/"
            className="nav-link flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:text-primary"
          >
            <Icons.ArrowRight className="h-3 w-3 rotate-180" />
            Back to Platform
          </Link>
        </div>
      </aside>

      <div className="flex min-h-screen flex-col md:pl-64 min-w-0">
        <header className="sticky top-0 z-30 h-14 glass-header border-b border-border/50 flex items-center justify-between px-6 shadow-sm">
          <h1 className="font-semibold text-foreground md:hidden">Admin</h1>
          <p className="hidden md:block text-sm text-muted-foreground">Manage posts, approvals & publishing</p>
          <Link href="/" className="text-sm font-medium text-primary hover:underline md:hidden">← Platform</Link>
        </header>
        <main className="flex-1 p-6 max-w-5xl w-full mx-auto page-enter">{children}</main>
      </div>
    </div>
  );
}
