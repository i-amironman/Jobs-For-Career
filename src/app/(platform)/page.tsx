import Link from 'next/link';
import { getFeaturedPosts, getPublishedPosts } from '@/lib/post-service';
import { resolveCountry } from '@/lib/country-server';
import FeaturedCarousel from '@/components/cards/featured-carousel';
import HomeSectionRow from '@/components/home/home-section-row';
import { Icons } from '@/components/ui/icons';
import type { PostDocument, PostType } from '@/lib/types/post';
import { POST_TYPE_ROUTES } from '@/lib/types/post';

const CATEGORIES = [
  { href: '/internships', label: 'Internships', icon: '🎒', tint: 'from-sky-50 to-blue-100' },
  { href: '/jobs', label: 'Jobs', icon: '💼', tint: 'from-orange-50 to-amber-100' },
  { href: '/competitions', label: 'Competitions', icon: '🏆', tint: 'from-yellow-50 to-orange-100' },
  { href: '/mock-tests', label: 'Mock Tests', icon: '📝', tint: 'from-violet-50 to-purple-100' },
  { href: '/mock-interview', label: 'Mock Interview', icon: '🎤', tint: 'from-pink-50 to-rose-100' },
  { href: '/mentorship', label: 'Mentorship', icon: '🎯', tint: 'from-teal-50 to-cyan-100' },
  { href: '/scholarships', label: 'Scholarships', icon: '🎓', tint: 'from-emerald-50 to-green-100' },
  { href: '/govt-jobs', label: 'Govt Jobs', icon: '🏛️', tint: 'from-slate-50 to-gray-100' },
  { href: '/prep-zone', label: 'Prep Zone', icon: '📚', tint: 'from-indigo-50 to-blue-100' },
];

const TRENDING = [
  { icon: Icons.TrendingUp, label: '2.4k+ new jobs this week', color: 'text-emerald-600' },
  { icon: Icons.Users, label: '500+ companies hiring', color: 'text-primary' },
  { icon: Icons.Award, label: '120 live competitions', color: 'text-amber-600' },
  { icon: Icons.Zap, label: 'Free mock tests available', color: 'text-violet-600' },
];

const HOME_SECTIONS: { type: PostType; title: string; subtitle: string }[] = [
  {
    type: 'internship',
    title: 'Internships',
    subtitle: 'Explore the most popular internships among students.',
  },
  {
    type: 'job',
    title: 'Jobs',
    subtitle: 'Discover the most sought-after jobs for freshers.',
  },
  {
    type: 'competition',
    title: 'Competitions',
    subtitle: 'Uncover the most talked-about competitions today.',
  },
  {
    type: 'mock-test',
    title: 'Mock Tests',
    subtitle: 'Practice with tests designed for your dream role.',
  },
  {
    type: 'mock-interview',
    title: 'Mock Interviews',
    subtitle: 'Sharpen your interview skills with AI-powered sessions.',
  },
  {
    type: 'mentorship',
    title: 'Mentorship',
    subtitle: 'Connect with mentors who can guide your career path.',
  },
  {
    type: 'scholarship',
    title: 'Scholarships',
    subtitle: 'Find funding opportunities to support your education.',
  },
  {
    type: 'govt-job',
    title: 'Govt Jobs',
    subtitle: 'Browse the latest government job openings.',
  },
  {
    type: 'prep-resource',
    title: 'Prep Zone',
    subtitle: 'Resources and tools to accelerate your preparation.',
  },
];

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country: urlCountry } = await searchParams;
  const country = await resolveCountry(urlCountry);

  let featured: Awaited<ReturnType<typeof getFeaturedPosts>> = [];
  const sectionPosts: Record<PostType, PostDocument[]> = {
    job: [],
    internship: [],
    scholarship: [],
    'govt-job': [],
    competition: [],
    'mock-test': [],
    'mock-interview': [],
    mentorship: [],
    'prep-resource': [],
  };

  try {
    const [featuredData, ...sections] = await Promise.all([
      getFeaturedPosts(country, 8),
      ...HOME_SECTIONS.map(({ type }) => getPublishedPosts(type, country, 8)),
    ]);
    featured = featuredData;
    HOME_SECTIONS.forEach(({ type }, i) => {
      sectionPosts[type] = sections[i];
    });
  } catch {
    // ponytail: DB optional at build time
  }

  return (
    <div className="space-y-10 pb-2">
      {/* Hero */}
      <section className="hero-mesh rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 bottom-0 h-40 w-40 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-[2.75rem] font-extrabold text-foreground tracking-tight leading-[1.1] mb-3">
              Unlock Your <span className="gradient-text">Career!</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Jobs, internships, competitions & career prep — curated for students and freshers worldwide.
            </p>
          </div>
          <div className="stats-pill shrink-0 self-start md:self-auto">
            <Icons.Zap className="h-3.5 w-3.5" />
            Access to 31M+ profiles
          </div>
        </div>
      </section>

      {/* Trending strip */}
      <section className="trending-strip scrollbar-hide">
        {TRENDING.map(({ icon: Icon, label, color }) => (
          <div key={label} className="trend-stat">
            <Icon className={`h-4 w-4 ${color}`} />
            <span className="text-foreground/80">{label}</span>
          </div>
        ))}
      </section>

      {/* Category scroll */}
      <section>
        <div className="category-scroll scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <Link key={cat.href} href={cat.href} className="category-card group relative z-[1]">
              <span className="category-card-label group-hover:text-primary transition-colors">
                {cat.label}
              </span>
              <div className={`category-card-icon bg-gradient-to-br ${cat.tint}`}>
                {cat.icon}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FeaturedCarousel posts={featured} />

      {HOME_SECTIONS.map(({ type, title, subtitle }) => (
        <HomeSectionRow
          key={type}
          title={title}
          subtitle={subtitle}
          viewAllHref={POST_TYPE_ROUTES[type]}
          posts={sectionPosts[type]}
        />
      ))}
    </div>
  );
}
