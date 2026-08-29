'use client';

import { THEMES, useTheme } from '@/context/theme-context';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 bg-white border border-border/60 rounded-2xl shadow-2xl p-4 w-56 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Theme Palette</p>
          <div className="space-y-1">
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => { setThemeId(t.id); setOpen(false); }}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left',
                  themeId === t.id
                    ? 'bg-primary/10 text-primary font-semibold ring-1 ring-primary/20'
                    : 'hover:bg-muted/60 text-foreground'
                )}
              >
                <span
                  className="h-5 w-5 rounded-full shrink-0 shadow-sm ring-2 ring-white"
                  style={{ background: t.primary }}
                />
                {t.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="h-12 w-12 rounded-2xl bg-white border border-border/60 shadow-lg hover:shadow-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:-rotate-6 active:scale-95"
        title="Switch theme palette"
      >
        🎨
      </button>
    </div>
  );
}
