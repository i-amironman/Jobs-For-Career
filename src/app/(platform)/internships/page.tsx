import ListingPageContent from '@/components/listing/listing-page-content';

export default async function InternshipsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <ListingPageContent
      type="internship"
      title="Internships for Freshers"
      subtitle="Find the latest internship opportunities — from tech giants to fast-growing startups."
      country={country}
    />
  );
}
