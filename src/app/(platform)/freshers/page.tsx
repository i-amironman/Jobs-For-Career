import ListingPageContent from '@/components/listing/listing-page-content';

export default async function FreshersPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <ListingPageContent
      type="freshers"
      title="Freshers Opportunities"
      subtitle="Entry-level jobs and internships for students and recent graduates — no experience required."
      country={country}
    />
  );
}
