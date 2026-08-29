import ListingPageContent from '@/components/listing/listing-page-content';

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <ListingPageContent
      type="job"
      title="Jobs for Freshers"
      subtitle="Discover full-time roles from top companies — filter by skills, location, and work type."
      country={country}
    />
  );
}
