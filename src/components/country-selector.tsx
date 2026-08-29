'use client';

import { useState, useRef, useEffect } from 'react';
import { useCountry, COUNTRIES } from '@/context/country-context';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

export default function CountrySelector() {
  const { country, countryData, setCountry } = useCountry();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-border/60 text-sm font-medium shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
      >
        <span className="text-base leading-none">{countryData.flag}</span>
        <span className="hidden sm:inline text-foreground">{countryData.code}</span>
        <Icons.ChevronDown className={cn('h-3.5 w-3.5 text-muted-foreground transition-transform', open && 'rotate-180')} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-border/60 rounded-2xl shadow-xl z-50 py-2 max-h-72 overflow-y-auto custom-scrollbar">
          <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Select Region</p>
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => { setCountry(c.code); setOpen(false); }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left',
                country === c.code
                  ? 'bg-primary/8 text-primary font-semibold'
                  : 'hover:bg-muted/60 text-foreground'
              )}
            >
              <span className="text-lg">{c.flag}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
