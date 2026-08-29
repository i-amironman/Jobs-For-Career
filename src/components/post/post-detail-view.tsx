'use client';

import { useEffect, useRef, useState, type ComponentType } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import type { PostDocument } from '@/lib/types/post';
import { POST_TYPE_LABELS, POST_TYPE_ROUTES, getPostRoute } from '@/lib/types/post';
import { generateSocialTemplate } from '@/lib/social-templates';
import { shareOrCopy } from '@/lib/share';
import { isSaved, toggleSaved, recordRecentView } from '@/lib/activity-storage';
import PostFaqSection from '@/components/post/post-faq-section';

interface PostDetailViewProps {
  post: PostDocument;
  featuredPosts?: PostDocument[];
}

type Tab = 'details' | 'additional' | 'reviews' | 'faqs';

const SECTION_ORDER: Tab[] = ['details', 'additional', 'reviews', 'faqs'];

function resolveActiveSection(
  sections: Partial<Record<Tab, HTMLElement>>,
  navEl: HTMLElement | null,
  headings: Partial<Record<Tab, HTMLElement>>,
): Tab {
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
  if (atBottom) return SECTION_ORDER[SECTION_ORDER.length - 1];

  const activateLine = (navEl?.getBoundingClientRect().bottom ?? 56) + 100;

  for (let i = SECTION_ORDER.length - 1; i >= 0; i--) {
    const id = SECTION_ORDER[i];
    const el = headings[id] ?? sections[id];
    if (!el) continue;
    if (el.getBoundingClientRect().top <= activateLine) return id;
  }

  return SECTION_ORDER[0];
}

function payLabel(post: PostDocument) {
  return post.compensation || post.amount || post.fee || '';
}

function daysLeftLabel(deadline?: string) {
  if (deadline) {
    const match = deadline.match(/(\d+)/);
    if (match) return `${match[1]} Days Left`;
  }
  return 'Open · Apply Now';
}

function workModeLabel(post: PostDocument) {
  return post.workType || 'Full Time';
}

function HeaderMetaChip({
  icon: Icon,
  label,
  value,
  highlight,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`detail-meta-chip ${highlight ? 'detail-meta-chip-highlight' : ''}`}>
      <span className={`detail-meta-chip-icon-wrap ${highlight ? 'detail-meta-chip-icon-wrap-highlight' : ''}`}>
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="detail-meta-chip-label">{label}</span>
        <span className="detail-meta-chip-value">{value}</span>
      </span>
    </div>
  );
}

function DetailFeaturedList({ posts }: { posts: PostDocument[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="detail-featured-box">
      <h3 className="detail-featured-title">Featured</h3>
      <ul className="space-y-3">
        {posts.slice(0, 3).map((item) => (
          <li key={item.slug}>
            <Link href={getPostRoute(item.type, item.slug)} className="detail-featured-item group">
              <span className="detail-featured-logo">{item.logo}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-foreground group-hover:text-primary line-clamp-2 leading-snug transition-colors">
                  {item.title}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5">
                  {item.organization} · {POST_TYPE_LABELS[item.type]}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ApplySidebar({
  post,
  pay,
  saved,
  featuredPosts,
  onSave,
  onShare,
}: {
  post: PostDocument;
  pay: string;
  saved: boolean;
  featuredPosts: PostDocument[];
  onSave: () => void;
  onShare: () => void;
}) {
  return (
    <div className="detail-sticky-panel space-y-4">
      <div className="apply-sidebar-card">
        <div className="px-4 pt-0 pb-5">
          <span className="days-left-ribbon">{daysLeftLabel(post.deadline)}</span>

          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-700 eligible-pulse">
            <Icons.Zap className="h-4 w-4" />
            You&apos;re eligible
          </div>

          <div className="flex items-center gap-3 mt-3 p-3 rounded-xl bg-muted/40 border border-border/40">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center ring-2 ring-primary/15">
              <Icons.User className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold truncate">Guest User</p>
              <p className="text-[11px] text-muted-foreground truncate">Sign in to track applications</p>
            </div>
          </div>

          {post.applyUrl ? (
            <Link href={post.applyUrl} target="_blank" rel="noopener noreferrer" className="block mt-4">
              <Button size="lg" className="w-full btn-primary-glow h-12 text-base font-bold shadow-lg rounded-xl">
                Quick Apply
              </Button>
            </Link>
          ) : (
            <Button size="lg" className="w-full mt-4 h-12 font-bold rounded-xl" disabled>
              Quick Apply
            </Button>
          )}

          <button
            type="button"
            onClick={onSave}
            className={`mt-2 w-full flex items-center justify-center gap-2 h-10 rounded-xl text-sm font-semibold border transition-all xl:hidden ${
              saved
                ? 'bg-red-50 border-red-200 text-red-600'
                : 'border-border/60 text-muted-foreground hover:border-primary/30 hover:text-primary'
            }`}
          >
            <Icons.Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
            {saved ? 'Saved' : 'Save for later'}
          </button>
        </div>
      </div>

      <div className="refer-banner">
        <p className="text-sm font-bold relative z-[1]">Share with Friends</p>
        <button
          type="button"
          onClick={onShare}
          className="relative z-[1] mt-3 inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-all"
        >
          <Icons.Share2 className="h-3.5 w-3.5" />
          Refer now
        </button>
      </div>

      <DetailFeaturedList posts={featuredPosts} />
    </div>
  );
}

export default function PostDetailView({ post, featuredPosts = [] }: PostDetailViewProps) {
  const [tab, setTab] = useState<Tab>('details');
  const [saved, setSaved] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<Partial<Record<Tab, HTMLElement>>>({});
  const headingRefs = useRef<Partial<Record<Tab, HTMLElement>>>({});
  const pay = payLabel(post);
  const listRoute = POST_TYPE_ROUTES[post.type];

  useEffect(() => {
    setSaved(isSaved(post.slug));
    recordRecentView(post);
  }, [post.slug, post.title, post.type, post.organization, post.logo]);

  useEffect(() => {
    let raf = 0;

    const updateActiveTab = () => {
      setTab(resolveActiveSection(sectionRefs.current, navRef.current, headingRefs.current));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActiveTab);
    };

    const t = window.setTimeout(updateActiveTab, 0);
    updateActiveTab();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [post.slug]);

  const scrollToSection = (id: Tab) => {
    const el = headingRefs.current[id] ?? sectionRefs.current[id];
    if (!el) return;
    const navBottom = navRef.current?.getBoundingClientRect().bottom ?? 56;
    const top = el.getBoundingClientRect().top + window.scrollY - navBottom - 12;
    window.scrollTo({ top, behavior: 'smooth' });
    setTab(id);
  };

  const handleShare = () => {
    void shareOrCopy(post.title, generateSocialTemplate(post, 'whatsapp'));
  };

  const handleSave = () => {
    setSaved(toggleSaved(post));
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: 'details', label: 'Details' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs & Discussions' },
  ];

  const infoCards = [
    { icon: Icons.DollarSign, title: 'Compensation', value: pay || 'Disclosed on apply' },
    { icon: Icons.Clock, title: 'Deadline', value: post.deadline || 'Rolling applications' },
    { icon: Icons.Briefcase, title: 'Work Type', value: post.workType || 'Full Time' },
    ...(post.benefits.length === 0
      ? [{ icon: Icons.Star, title: 'Perks & Benefits', value: 'Career growth & mentorship' }]
      : []),
    ...(post.fee ? [{ icon: Icons.FileText, title: 'Registration Fee', value: post.fee }] : []),
    ...(post.region ? [{ icon: Icons.Globe, title: 'Region', value: post.region }] : []),
    ...(post.country ? [{ icon: Icons.MapPin, title: 'Country', value: post.country }] : []),
  ];

  const headerMeta = [
    { icon: Icons.MapPin, label: 'Location', value: post.location || 'Not specified' },
    { icon: Icons.DollarSign, label: 'Compensation', value: pay || 'Disclosed on apply', highlight: Boolean(pay) },
    { icon: Icons.Clock, label: 'Deadline', value: post.deadline || 'Rolling applications' },
    { icon: Icons.Briefcase, label: 'Type', value: POST_TYPE_LABELS[post.type] },
  ];

  return (
    <>
      <div className="grid xl:grid-cols-[1fr_300px] gap-5 xl:gap-6 pb-20 xl:pb-4">
        <div className="min-w-0">
          <div className="detail-page-card">
            <nav ref={navRef} className="detail-page-nav scrollbar-hide" aria-label="Page sections">
              <Link
                href={listRoute}
                className="detail-page-nav-home"
                aria-label={`Back to ${POST_TYPE_LABELS[post.type]}s`}
              >
                <Icons.Home className="h-[18px] w-[18px]" />
              </Link>
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`detail-page-tab ${tab === id ? 'detail-page-tab-active' : ''}`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="detail-page-card-inner">
              <header className="detail-header-card">
                <span className="detail-header-card-orb" aria-hidden />
                <div className="detail-header-card-content">
                  <div className="detail-header-top">
                    <div className="detail-header-identity">
                      <div className="detail-header-logo">{post.logo}</div>
                      <div className="detail-header-title-block min-w-0">
                        <div className="detail-header-badges">
                          <span className="detail-wfh-badge">
                            <Icons.Home className="h-3.5 w-3.5" />
                            {workModeLabel(post)}
                          </span>
                          <span className="detail-type-badge">{POST_TYPE_LABELS[post.type]}</span>
                        </div>
                        <h1 className="detail-header-title">{post.title}</h1>
                        <p className="detail-header-org">
                          <Icons.Building2 className="h-3.5 w-3.5 shrink-0" />
                          {post.organization}
                        </p>
                      </div>
                    </div>

                    <div className="detail-header-actions">
                      {post.orgInfo?.website ? (
                        <a
                          href={post.orgInfo.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="detail-header-icon-btn"
                          aria-label="Visit website"
                        >
                          <Icons.Globe className="h-4 w-4" />
                        </a>
                      ) : (
                        <button type="button" className="detail-header-icon-btn" aria-label="Website" disabled>
                          <Icons.Globe className="h-4 w-4" />
                        </button>
                      )}
                      <button type="button" className="detail-header-icon-btn" aria-label="Deadline" title={post.deadline}>
                        <Icons.Clock className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleSave}
                        className={`detail-header-icon-btn ${saved ? 'detail-header-icon-btn-saved' : ''}`}
                        aria-label="Save"
                      >
                        <Icons.Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        type="button"
                        onClick={handleShare}
                        className="detail-header-icon-btn"
                        aria-label="Share"
                      >
                        <Icons.Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="detail-meta-grid">
                    {headerMeta
                      .filter(({ label }) => label !== 'Type')
                      .map(({ icon, label, value, highlight }) => (
                        <HeaderMetaChip key={label} icon={icon} label={label} value={value} highlight={highlight} />
                      ))}
                  </div>

                  {(post.skills.length > 0 || post.tags.length > 0) && (
                    <div className="detail-header-skills">
                      <p className="detail-header-skills-label">Skills &amp; focus areas</p>
                      <div className="detail-header-skills-list">
                        {[...post.skills, ...post.tags].slice(0, 6).map((s) => (
                          <span key={s} className="detail-skill-tag">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </header>

          <div className="detail-page-sections space-y-10">
            <section
              id="detail-section-details"
              data-section="details"
              ref={(el) => { sectionRefs.current.details = el ?? undefined; }}
              className="detail-scroll-section scroll-mt-[3.5rem] space-y-6"
            >
              {post.eligibility.length > 0 && (
                <div>
                  <h2
                    ref={(el) => { headingRefs.current.details = el ?? undefined; }}
                    className="section-heading"
                  >
                    Eligibility
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.eligibility.join(' • ')}
                  </p>
                </div>
              )}

              {(post.description || post.content) && (
                <div>
                  <h2
                    ref={(el) => {
                      if (!headingRefs.current.details) headingRefs.current.details = el ?? undefined;
                    }}
                    className="section-heading"
                  >
                    Details
                  </h2>
                  {post.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{post.description}</p>
                  )}
                  {post.content && (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap mt-4">{post.content}</p>
                  )}
                </div>
              )}

              {post.responsibilities.length > 0 && (
                <div>
                  <h2 className="section-heading">Responsibilities</h2>
                  <ul className="space-y-2.5">
                    {post.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Icons.CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {post.requirements.length > 0 && (
                <div>
                  <h2 className="section-heading">Requirements</h2>
                  <ul className="space-y-2.5">
                    {post.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Icons.CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </section>

            <section
              id="detail-section-additional"
              data-section="additional"
              ref={(el) => { sectionRefs.current.additional = el ?? undefined; }}
              className="detail-scroll-section scroll-mt-[3.5rem] space-y-6"
            >
              <div>
                <h2
                  ref={(el) => { headingRefs.current.additional = el ?? undefined; }}
                  className="section-heading"
                >
                  Additional Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {infoCards.map(({ icon: Icon, title, value }) => (
                    <div key={title} className="info-grid-card">
                      <div className="info-grid-icon">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {post.benefits.length > 0 && (
                <div>
                  <h2 className="section-heading">Benefits</h2>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {post.benefits.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg px-3 py-2.5">
                        <Icons.CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {post.applicationProcess.length > 0 && (
                <div>
                  <h2 className="section-heading">Application Process</h2>
                  <div className="space-y-4">
                    {post.applicationProcess.map((step, i) => (
                      <div key={step} className="process-step">
                        <span className="process-step-num">{i + 1}</span>
                        <p className="text-sm text-muted-foreground pt-1.5 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {post.orgInfo && (
                <div className="detail-content-card bg-gradient-to-br from-muted/30 to-white">
                  <h2 className="section-heading">About {post.organization}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.orgInfo.description || `${post.organization} is hiring through JobsForCareer.`}
                  </p>
                  {post.orgInfo.website && (
                    <a
                      href={post.orgInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary hover:underline"
                    >
                      <Icons.Globe className="h-3.5 w-3.5" />
                      Visit website
                    </a>
                  )}
                </div>
              )}
            </section>

            <section
              id="detail-section-reviews"
              data-section="reviews"
              ref={(el) => { sectionRefs.current.reviews = el ?? undefined; }}
              className="detail-scroll-section scroll-mt-[3.5rem]"
            >
              <div className="detail-content-card text-center py-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 mb-4">
                  <Icons.Star className="h-8 w-8 text-amber-500" />
                </div>
                <h3
                  ref={(el) => { headingRefs.current.reviews = el ?? undefined; }}
                  className="font-bold text-lg text-foreground mb-1"
                >
                  Feedback &amp; Rating
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Apply to this opportunity and share your experience to help the community.
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Icons.Star key={n} className="h-5 w-5 text-amber-200" />
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-5" disabled>
                  Write a review
                </Button>
              </div>
            </section>

            <section
              id="detail-section-faqs"
              data-section="faqs"
              ref={(el) => { sectionRefs.current.faqs = el ?? undefined; }}
              className="detail-scroll-section scroll-mt-[3.5rem]"
            >
              <PostFaqSection
                post={post}
                onHeadingRef={(el) => { headingRefs.current.faqs = el ?? undefined; }}
              />
            </section>
          </div>

          {featuredPosts.length > 0 && (
            <div className="xl:hidden mt-8 pt-6 border-t border-border/50">
              <DetailFeaturedList posts={featuredPosts} />
            </div>
          )}
            </div>
          </div>
        </div>

        <aside className="hidden xl:block">
          <ApplySidebar
            post={post}
            pay={pay}
            saved={saved}
            featuredPosts={featuredPosts}
            onSave={handleSave}
            onShare={handleShare}
          />
        </aside>
      </div>

      <div className="mobile-apply-bar xl:hidden">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <div className="min-w-0 flex-1">
            {pay && <p className="text-sm font-extrabold text-emerald-700 truncate">{pay}</p>}
            <p className="text-[11px] text-muted-foreground truncate">{post.organization}</p>
          </div>
          {post.applyUrl ? (
            <Link href={post.applyUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <Button className="btn-primary-glow font-bold px-6 h-11 rounded-xl">Quick Apply</Button>
            </Link>
          ) : (
            <Button className="shrink-0 font-bold px-6 h-11 rounded-xl" disabled>Apply</Button>
          )}
        </div>
      </div>
    </>
  );
}
