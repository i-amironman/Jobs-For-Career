'use client';

import { useState } from 'react';
import { SOCIAL_CHANNELS, generateSocialTemplate } from '@/lib/social-templates';
import type { PostDocument } from '@/lib/types/post';
import type { SocialChannel } from '@/lib/social-templates';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SocialTemplateTabsProps {
  post: PostDocument;
}

export default function SocialTemplateTabs({ post }: SocialTemplateTabsProps) {
  const [active, setActive] = useState<SocialChannel>('whatsapp');
  const [copied, setCopied] = useState(false);

  const text = generateSocialTemplate(post, active);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="surface-card overflow-hidden">
      <div className="px-5 py-4 border-b border-border/60 bg-gradient-to-r from-primary/5 to-transparent">
        <h3 className="font-semibold">Social Media Templates</h3>
        <p className="text-xs text-muted-foreground mt-0.5">Copy-ready content for each channel</p>
      </div>

      <div className="flex gap-1.5 p-3 border-b border-border/50 overflow-x-auto scrollbar-hide">
        {SOCIAL_CHANNELS.map((ch) => (
          <button
            key={ch.id}
            type="button"
            onClick={() => setActive(ch.id)}
            className={cn(
              'shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all',
              active === ch.id
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            {ch.label}
          </button>
        ))}
      </div>

      <div className="p-5">
        <pre className="text-sm whitespace-pre-wrap font-sans text-muted-foreground bg-muted/40 rounded-xl p-4 mb-4 max-h-64 overflow-y-auto custom-scrollbar leading-relaxed border border-border/40">
          {text}
        </pre>
        <Button size="sm" variant="outline" onClick={copy}>
          {copied ? '✓ Copied!' : 'Copy to Clipboard'}
        </Button>
      </div>
    </div>
  );
}
