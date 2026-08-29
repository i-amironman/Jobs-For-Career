import Link from 'next/link';
import ListingPageContent from '@/components/listing/listing-page-content';
import { Button } from '@/components/ui/button';

export default async function MentorshipPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <div>
      <div className="gradient-hero rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
        <div className="relative">
          <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">Mentorship</span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">1-on-1 Online Mentorship</h1>
          <p className="text-muted-foreground mt-2 max-w-lg">Learn from industry experts and accelerate your career growth.</p>
        </div>
        <Link href="/contact"><Button className="relative shrink-0">Become a Mentor</Button></Link>
      </div>
      <ListingPageContent
        type="mentorship"
        title="Explore Mentors"
        subtitle="Book sessions with verified mentors."
        country={country}
      />
    </div>
  );
}
