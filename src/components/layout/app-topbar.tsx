'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import CountrySelector from '@/components/country-selector';

interface AppTopbarProps {
  onMenuToggle: () => void;
  searchPlaceholder?: string;
  hideSearch?: boolean;
}

export default function AppTopbar({
  onMenuToggle,
  searchPlaceholder = 'Search jobs, internships, competitions...',
  hideSearch = false,
}: AppTopbarProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/jobs?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-30 h-[60px] glass-header border-b border-border/50 flex items-center gap-4 px-4 lg:px-6 shadow-sm shadow-slate-900/[0.03]">
      <button
        type="button"
        onClick={onMenuToggle}
        className="lg:hidden p-2.5 rounded-xl hover:bg-muted/80 text-foreground transition-all duration-200 active:scale-95"
        aria-label="Toggle menu"
      >
        <Icons.Menu className="h-5 w-5" />
      </button>

      {hideSearch ? (
        <div className="flex-1" aria-hidden />
      ) : (
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-auto">
          <div
            className={`relative group transition-all duration-300 ${searchFocused ? 'scale-[1.01]' : ''}`}
          >
            <Icons.Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 ${
                searchFocused ? 'text-primary' : 'text-muted-foreground'
              }`}
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder={searchPlaceholder}
              className={`pl-11 h-11 rounded-full border-0 shadow-inner transition-all duration-300 ${
                searchFocused
                  ? 'bg-white ring-2 ring-primary/25 shadow-md'
                  : 'bg-muted/60 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:bg-white'
              }`}
            />
          </div>
        </form>
      )}

      <div className="flex items-center gap-1.5 ml-auto">
        <CountrySelector />
        <button
          type="button"
          className="hidden sm:flex p-2.5 rounded-xl hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105 active:scale-95 relative"
          aria-label="Notifications"
        >
          <Icons.Bell className="h-[18px] w-[18px]" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-white animate-pulse" />
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/20 flex items-center justify-center cursor-pointer hover:ring-primary/40 hover:scale-105 transition-all duration-200 active:scale-95">
          <Icons.User className="h-4 w-4 text-primary" />
        </div>
      </div>
    </header>
  );
}
