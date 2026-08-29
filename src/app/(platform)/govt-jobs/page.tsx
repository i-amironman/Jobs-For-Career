import ListingPageContent from '@/components/listing/listing-page-content';

export default async function GovtJobsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <ListingPageContent
      type="govt-job"
      title="Government Jobs"
      subtitle="Explore public sector career opportunities."
      country={country}
    />
  );
}
