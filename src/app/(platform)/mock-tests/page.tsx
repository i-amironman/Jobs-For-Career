import ListingPageContent from '@/components/listing/listing-page-content';

export default async function MockTestsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <ListingPageContent
      type="mock-test"
      title="Mock Tests"
      subtitle="Practice role-based assessments from top companies."
      country={country}
    />
  );
}
