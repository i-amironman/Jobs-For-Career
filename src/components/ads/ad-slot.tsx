'use client';

import { cn } from '@/lib/utils';

interface AdSlotProps {
  slot: string;
  className?: string;
}

export default function AdSlot({ slot, className }: AdSlotProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  if (!clientId) {
    return (
      <div
        className={cn(
          'rounded-2xl border border-dashed border-border/50 bg-gradient-to-br from-muted/40 to-muted/20',
          'flex flex-col items-center justify-center text-xs text-muted-foreground/60 gap-1',
          className
        )}
        data-ad-slot={slot}
      >
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">Ad Space</span>
        <span className="opacity-40">{slot}</span>
      </div>
    );
  }

  return (
    <ins
      className={cn('adsbygoogle block rounded-2xl overflow-hidden', className)}
      style={{ display: 'block' }}
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
