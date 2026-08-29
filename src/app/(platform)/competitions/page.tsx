import ListingPageContent from '@/components/listing/listing-page-content';

export default async function CompetitionsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  return (
    <ListingPageContent
      type="competition"
      title="Competitions & Hackathons"
      subtitle="Compete, learn, and win prizes from top organizations."
      country={country}
    />
  );
}
