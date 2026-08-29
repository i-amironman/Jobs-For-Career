import Link from 'next/link';
import { getPublishedPosts } from '@/lib/post-service';
import { resolveCountry } from '@/lib/country-server';

const PREP_CATEGORIES = [
  { href: '/mock-tests', icon: '📝', label: 'Mock Tests', color: 'bg-blue-50' },
  { href: '/mock-interview', icon: '🎤', label: 'Mock Interview', color: 'bg-purple-50' },
  { href: '/scholarships', icon: '🎓', label: 'Scholarships', color: 'bg-yellow-50' },
  { href: '/competitions', icon: '🏆', label: 'Competitions', color: 'bg-orange-50' },
  { href: '/mentorship', icon: '👥', label: 'Mentorship', color: 'bg-green-50' },
  { href: '/jobs', icon: '💼', label: 'Jobs', color: 'bg-indigo-50' },
];

export default async function PrepZonePage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country: urlCountry } = await searchParams;
  const country = await resolveCountry(urlCountry);
  let resources: Awaited<ReturnType<typeof getPublishedPosts>> = [];

  try {
    resources = await getPublishedPosts('prep-resource', country);
  } catch {
    // DB unavailable
  }

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Everything you need to prepare, in one place.</h1>
        <p className="text-muted-foreground">Join millions of learners preparing smarter on JobsForCareer.</p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-10">
        {PREP_CATEGORIES.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border border-border ${cat.color} hover:shadow-sm transition-shadow text-center`}
          >
            <span className="text-2xl">{cat.icon}</span>
            <span className="text-xs font-medium">{cat.label}</span>
          </Link>
        ))}
      </div>

      <section>
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Prep Resources
        </h2>
        {resources.length === 0 ? (
          <p className="text-muted-foreground">Resources coming soon. Check back later!</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((r) => (
              <Link
                key={r._id}
                href={`/prep-zone/${r.slug}`}
                className="p-5 bg-background border border-border rounded-2xl hover:border-primary/20 transition-colors"
              >
                <span className="text-3xl">{r.logo}</span>
                <h3 className="font-semibold mt-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{r.description}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
