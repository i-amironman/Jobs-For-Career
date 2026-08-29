'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: Icons.Home },
  { href: '/internships', label: 'Internships', icon: Icons.GraduationCap },
  { href: '/jobs', label: 'Jobs', icon: Icons.Briefcase },
  { href: '/freshers', label: 'Freshers', icon: Icons.Briefcase },
  { href: '/competitions', label: 'Competitions', icon: Icons.Award },
  { href: '/mock-tests', label: 'Mock Tests', icon: Icons.FileText },
  { href: '/mock-interview', label: 'Mock Interview', icon: Icons.Users },
  { href: '/mentorship', label: 'Mentorship', icon: Icons.Users },
  { href: '/prep-zone', label: 'Prep Zone', icon: Icons.BookOpen },
  { href: '/scholarships', label: 'Scholarships', icon: Icons.GraduationCap },
  { href: '/govt-jobs', label: 'Govt Jobs', icon: Icons.Building },
];

const BOTTOM_NAV = [
  { href: '/my-activity', label: 'My Activity', icon: Icons.Clock },
];

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function AppSidebar({ open, onClose }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-screen w-[260px] bg-white flex flex-col sidebar-rail border-r border-border/60',
          'transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="p-5 shrink-0">
          <Link href="/" className="flex items-center gap-3 group" onClick={onClose}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
              <Icons.Briefcase className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base text-foreground tracking-tight block leading-tight group-hover:text-primary transition-colors">
                JobsForCareer
              </span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                Career Platform
              </span>
            </div>
          </Link>
        </div>

        <div className="px-4 pb-3 shrink-0">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl btn-primary-glow text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Icons.Plus className="h-4 w-4" />
            Post Opportunity
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar px-3 py-1 space-y-0.5">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={cn(
                  'nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm',
                  active ? 'nav-item-active' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className={cn('h-[18px] w-[18px] shrink-0 transition-colors', active && 'text-primary')} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border/60 space-y-0.5 shrink-0">
          {BOTTOM_NAV.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={cn(
                  'nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm',
                  active ? 'nav-item-active' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" />
                {label}
              </Link>
            );
          })}
          <Link
            href="/admin"
            onClick={onClose}
            className="nav-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-muted-foreground hover:text-foreground"
          >
            <Icons.Settings className="h-4 w-4" />
            Admin Portal
          </Link>
        </div>
      </aside>
    </>
  );
}
