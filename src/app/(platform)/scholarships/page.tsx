import ListingPageContent from '@/components/listing/listing-page-content';

export default async function ScholarshipsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <ListingPageContent
      type="scholarship"
      title="Scholarships & Grants"
      subtitle="Fund your education with scholarships worldwide."
      country={country}
    />
  );
}
