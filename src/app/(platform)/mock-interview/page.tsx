import ListingPageContent from '@/components/listing/listing-page-content';

export default async function MockInterviewPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <ListingPageContent
      type="mock-interview"
      title="Mock Interviews"
      subtitle="AI-powered role-based mock interviews to ace your next opportunity."
      country={country}
    />
  );
}
