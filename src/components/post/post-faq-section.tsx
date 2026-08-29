'use client';

import { useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { generatePostFaqs } from '@/lib/post-faqs';
import type { PostDocument } from '@/lib/types/post';

interface PostFaqSectionProps {
  post: PostDocument;
  onHeadingRef?: (el: HTMLHeadingElement | null) => void;
}

export default function PostFaqSection({ post, onHeadingRef }: PostFaqSectionProps) {
  const faqs = useMemo(() => generatePostFaqs(post), [post]);

  return (
    <div className="space-y-4">
      <div className="detail-content-card detail-faq-card">
        <div className="detail-faq-header">
          <div className="detail-faq-header-icon">
            <Icons.HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h2 ref={onHeadingRef} id="detail-faq-heading" className="section-heading !mb-0">
              FAQs &amp; Discussions
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {faqs.length} common questions about this opportunity
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="detail-faq-accordion">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="detail-faq-item border-0">
              <AccordionTrigger className="detail-faq-trigger">{faq.question}</AccordionTrigger>
              <AccordionContent className="detail-faq-answer">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="detail-content-card">
        <p className="text-sm font-semibold text-foreground mb-2">Ask a question</p>
        <textarea
          placeholder="Ask a question (be specific)..."
          rows={3}
          className="w-full text-sm resize-none focus:outline-none placeholder:text-muted-foreground/60 bg-transparent"
          disabled
        />
        <div className="flex justify-end mt-3 pt-3 border-t border-border/40">
          <Button size="sm" disabled>
            Post Question
          </Button>
        </div>
      </div>
    </div>
  );
}
