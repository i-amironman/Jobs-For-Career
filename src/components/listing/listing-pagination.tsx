'use client';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';

export const LISTING_PAGE_SIZE = 15;

interface ListingPaginationProps {
  page: number;
  totalItems: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
}

function getPaginationRange(current: number, total: number): (number | 'gap')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const range: (number | 'gap')[] = [1];
  if (current > 3) range.push('gap');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) range.push(i);

  if (current < total - 2) range.push('gap');
  range.push(total);
  return range;
}

export default function ListingPagination({
  page,
  totalItems,
  pageSize = LISTING_PAGE_SIZE,
  onPageChange,
}: ListingPaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);
  if (totalPages <= 1) return null;

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);
  const pages = getPaginationRange(page, totalPages);

  const goToPage = (next: number) => {
    if (next < 1 || next > totalPages || next === page) return;
    onPageChange(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="listing-pagination" aria-label="Listing pagination">
      <p className="listing-pagination-summary">
        Showing <span className="font-semibold text-foreground">{start}–{end}</span> of{' '}
        <span className="font-semibold text-foreground">{totalItems}</span>
      </p>

      <div className="listing-pagination-controls">
        <button
          type="button"
          className="listing-pagination-btn"
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
        >
          <Icons.ChevronDown className="h-3.5 w-3.5 rotate-90" />
          Prev
        </button>

        {pages.map((item, idx) =>
          item === 'gap' ? (
            <span key={`gap-${idx}`} className="listing-pagination-gap" aria-hidden>
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              className={cn('listing-pagination-page', page === item && 'listing-pagination-page-active')}
              onClick={() => goToPage(item)}
              aria-label={`Page ${item}`}
              aria-current={page === item ? 'page' : undefined}
            >
              {item}
            </button>
          ),
        )}

        <button
          type="button"
          className="listing-pagination-btn"
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          aria-label="Next page"
        >
          Next
          <Icons.ChevronDown className="h-3.5 w-3.5 -rotate-90" />
        </button>
      </div>
    </nav>
  );
}
