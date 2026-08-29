'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

export interface DropdownOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  label: string;
  options: DropdownOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  single?: boolean;
  className?: string;
}

export default function FilterDropdown({
  label,
  options,
  selected,
  onChange,
  single = false,
  className,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0, minWidth: 160 });

  useEffect(() => setMounted(true), []);

  const updatePosition = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      top: rect.bottom + 6,
      left: rect.left,
      minWidth: Math.max(rect.width, 176),
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const toggle = (value: string) => {
    if (single) {
      onChange([value]);
      setOpen(false);
      return;
    }
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const triggerLabel =
    single && selected[0]
      ? options.find((o) => o.value === selected[0])?.label ?? label
      : selected.length > 0
        ? `${label} (${selected.length})`
        : label;

  const menu =
    open && options.length > 0 ? (
      <div
        ref={menuRef}
        className="listing-filter-menu listing-filter-menu-portal"
        style={{ top: pos.top, left: pos.left, minWidth: pos.minWidth }}
        role="listbox"
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            role="option"
            aria-selected={selected.includes(opt.value)}
            onClick={() => toggle(opt.value)}
            className={cn(
              'listing-filter-option w-full text-left',
              single && selected.includes(opt.value) && 'bg-primary/8',
              !single && selected.includes(opt.value) && 'bg-primary/5',
            )}
          >
            {!single && (
              <input
                type="checkbox"
                checked={selected.includes(opt.value)}
                readOnly
                tabIndex={-1}
                className="listing-filter-checkbox pointer-events-none"
              />
            )}
            <span
              className={cn(
                'flex-1 text-sm text-foreground',
                selected.includes(opt.value) && 'font-semibold text-primary',
              )}
            >
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    ) : null;

  return (
    <div className={cn('listing-filter-item', className)}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
        className={cn('listing-filter-trigger', selected.length > 0 && 'listing-filter-trigger-active')}
      >
        {single && (
          <svg className="h-3 w-3 shrink-0 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        )}
        <span className="truncate max-w-[4.25rem] sm:max-w-[5.5rem] xl:max-w-none">{triggerLabel}</span>
        <Icons.ChevronDown className={cn('h-3 w-3 shrink-0 transition-transform', open && 'rotate-180')} />
      </button>

      {mounted && menu ? createPortal(menu, document.body) : null}
    </div>
  );
}
