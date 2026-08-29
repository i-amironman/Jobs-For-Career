import type { PostDocument, PostType } from '@/lib/types/post';
import { POST_TYPE_LABELS } from '@/lib/types/post';

export interface PostFaq {
  id: string;
  question: string;
  answer: string;
}

const MIN_FAQS = 8;

const TYPE_NOUN: Record<PostType, string> = {
  job: 'role',
  internship: 'internship',
  scholarship: 'scholarship',
  'govt-job': 'government position',
  competition: 'competition',
  'mock-test': 'mock test',
  'mock-interview': 'mock interview',
  mentorship: 'mentorship program',
  'prep-resource': 'prep resource',
};

function hashSlug(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function payText(post: PostDocument): string {
  return post.compensation || post.amount || post.fee || 'Details shared during the application process';
}

function deadlineText(post: PostDocument): string {
  return post.deadline || 'Rolling applications — apply as early as possible';
}

type FaqBuilder = (post: PostDocument) => PostFaq;

function coreBuilders(): FaqBuilder[] {
  return [
    (post) => ({
      id: 'eligibility',
      question: `Who can apply for the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization}?`,
      answer:
        post.eligibility.length > 0
          ? post.eligibility.join('. ') + '.'
          : `This ${TYPE_NOUN[post.type]} is open to qualified candidates who meet ${post.organization}'s requirements. Review the eligibility criteria on this page and ensure your profile aligns before applying.`,
    }),
    (post) => ({
      id: 'compensation',
      question: `What is the compensation or stipend for ${post.title} at ${post.organization}?`,
      answer: `The listed package for this ${TYPE_NOUN[post.type]} is ${payText(post)}. Final offer details may vary based on experience, location, and ${post.organization}'s policies.`,
    }),
    (post) => ({
      id: 'location',
      question: `Where is the ${post.title} ${TYPE_NOUN[post.type]} based, and what is the work mode?`,
      answer: `This opportunity is based in ${post.location} with a ${post.workType || 'standard'} work arrangement. Confirm any relocation or hybrid expectations with ${post.organization} during the interview process.`,
    }),
    (post) => ({
      id: 'deadline',
      question: `What is the last date to apply for ${post.title} at ${post.organization}?`,
      answer: `The application timeline is: ${deadlineText(post)}. We recommend submitting your application well before the deadline to avoid last-minute issues.`,
    }),
    (post) => ({
      id: 'apply-how',
      question: `How do I apply for the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization}?`,
      answer: post.applyUrl
        ? `Click the Quick Apply button on this page to start your application on ${post.organization}'s official portal. Keep your resume and relevant documents ready before you begin.`
        : `Use the Quick Apply option on this page when available, or visit ${post.organization}'s careers portal directly. Prepare an updated resume tailored to ${post.title}.`,
    }),
    (post) => ({
      id: 'skills',
      question: `What skills are important for the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization}?`,
      answer:
        post.skills.length > 0
          ? `Key skills mentioned for this ${TYPE_NOUN[post.type]} include ${post.skills.join(', ')}. Highlight projects or experience that demonstrate these abilities in your application.`
          : `Review the requirements and responsibilities sections on this page for skill expectations. Tailor your resume to show relevant experience for ${post.title} at ${post.organization}.`,
    }),
    (post) => ({
      id: 'selection',
      question: `What is the selection process for ${post.title} at ${post.organization}?`,
      answer:
        post.applicationProcess.length > 0
          ? post.applicationProcess.map((step, i) => `${i + 1}. ${step}`).join(' ')
          : `Typical stages include application screening, assessments or assignments, and interviews with the ${post.organization} team. Timelines vary by role and applicant volume.`,
    }),
    (post) => ({
      id: 'benefits',
      question: `What benefits or perks come with the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization}?`,
      answer:
        post.benefits.length > 0
          ? post.benefits.join('. ') + '.'
          : `${post.organization} may offer learning opportunities, mentorship, and career growth support for this ${TYPE_NOUN[post.type]}. Specific benefits are confirmed at the offer stage.`,
    }),
  ];
}

function poolBuilders(): FaqBuilder[] {
  return [
    (post) => ({
      id: 'pool-experience',
      question: `Do I need prior experience for the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization}?`,
      answer:
        post.requirements.length > 0
          ? `Expectations include: ${post.requirements.slice(0, 3).join('; ')}. Check the full requirements section for complete details.`
          : `Experience requirements depend on the level of this ${TYPE_NOUN[post.type]}. Freshers and experienced candidates should both review the eligibility and requirements sections carefully.`,
    }),
    (post) => ({
      id: 'pool-duration',
      question: `How long does the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization} typically last?`,
      answer: `Duration depends on ${post.organization}'s program structure for ${POST_TYPE_LABELS[post.type].toLowerCase()} opportunities. Refer to the job description or ask the recruiter during your first interaction for exact timelines.`,
    }),
    (post) => ({
      id: 'pool-remote',
      question: `Can I work remotely for ${post.title} at ${post.organization}?`,
      answer: `This listing shows ${post.workType || 'a standard'} work mode in ${post.location}. Remote or hybrid flexibility, if any, is decided by ${post.organization} and usually discussed during interviews.`,
    }),
    (post) => ({
      id: 'pool-resume',
      question: `What should I include in my resume for ${post.title} at ${post.organization}?`,
      answer: `Focus on relevant skills${post.skills.length ? ` (${post.skills.slice(0, 4).join(', ')})` : ''}, measurable achievements, and projects that match the responsibilities listed for this ${TYPE_NOUN[post.type]}. Keep it concise and role-specific.`,
    }),
    (post) => ({
      id: 'pool-response-time',
      question: `How long does ${post.organization} take to respond after applying for ${post.title}?`,
      answer: `Response times vary by hiring volume. Most organizations reply within one to three weeks. If you do not hear back, consider following up politely through the official application channel.`,
    }),
    (post) => ({
      id: 'pool-interview-prep',
      question: `How should I prepare for the ${post.title} interview at ${post.organization}?`,
      answer: `Research ${post.organization}, review the ${TYPE_NOUN[post.type]} description, prepare examples for responsibilities listed on this page, and practice answers for both technical and behavioral questions relevant to ${post.title}.`,
    }),
    (post) => ({
      id: 'pool-certificates',
      question: `Will I receive a certificate or offer letter for ${post.title} at ${post.organization}?`,
      answer: `Successful candidates typically receive formal documentation from ${post.organization} — such as an offer letter, internship letter, or completion certificate depending on the ${TYPE_NOUN[post.type]} type.`,
    }),
    (post) => ({
      id: 'pool-freshers',
      question: `Are freshers eligible for the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization}?`,
      answer:
        post.eligibility.length > 0
          ? `Refer to the eligibility criteria: ${post.eligibility[0]}. Additional requirements may apply.`
          : `Many ${POST_TYPE_LABELS[post.type].toLowerCase()} openings accept early-career candidates. Match your academic background and skills to the listed requirements before applying.`,
    }),
    (post) => ({
      id: 'pool-part-time',
      question: `Is the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization} full-time or part-time?`,
      answer: `The listed work type is ${post.workType || 'Full Time'}. Confirm weekly hours and schedule expectations directly with ${post.organization} if you need flexibility.`,
    }),
    (post) => ({
      id: 'pool-referral',
      question: `Can I refer a friend for the ${post.title} ${TYPE_NOUN[post.type]} at ${post.organization}?`,
      answer: `Yes — share this listing using the Share button on the page. Your friend should apply through the official ${post.organization} application link to ensure their profile is tracked correctly.`,
    }),
    (post) => ({
      id: 'pool-documents',
      question: `What documents are required to apply for ${post.title} at ${post.organization}?`,
      answer: `Commonly requested documents include a resume, cover letter, and academic or work proofs. ${post.organization} may request additional items based on the ${TYPE_NOUN[post.type]} — check the application portal for the exact checklist.`,
    }),
    (post) => ({
      id: 'pool-multiple',
      question: `Can I apply to multiple ${POST_TYPE_LABELS[post.type].toLowerCase()} openings at ${post.organization}?`,
      answer: `Policies vary. Some organizations allow multiple active applications; others limit one at a time. Review ${post.organization}'s careers FAQ or ask the recruiter when you apply for ${post.title}.`,
    }),
    (post) => ({
      id: 'pool-contact',
      question: `Who should I contact if I have questions about ${post.title} at ${post.organization}?`,
      answer: post.orgInfo?.website
        ? `Visit ${post.organization}'s official website (${post.orgInfo.website}) or use the application portal's support channel for role-specific queries about this ${TYPE_NOUN[post.type]}.`
        : `Use the official application channel or ${post.organization}'s careers contact page for questions about this ${TYPE_NOUN[post.type]}. Avoid sharing sensitive personal data in public discussions.`,
    }),
    (post) => ({
      id: 'pool-withdraw',
      question: `Can I withdraw my application for ${post.title} at ${post.organization}?`,
      answer: `Yes. Most application portals let you withdraw before a final decision. Contact ${post.organization}'s recruiting team through the same portal you used to apply for ${post.title}.`,
    }),
    (post) => ({
      id: 'pool-background',
      question: `Does ${post.organization} conduct background checks for the ${post.title} ${TYPE_NOUN[post.type]}?`,
      answer: `Many employers verify education and employment history before onboarding. ${post.organization} will communicate if a background check is required for this ${TYPE_NOUN[post.type]}.`,
    }),
    (post) => ({
      id: 'pool-probation',
      question: `Is there a probation or evaluation period for ${post.title} at ${post.organization}?`,
      answer: `Evaluation periods depend on ${post.organization}'s HR policies and the nature of this ${TYPE_NOUN[post.type]}. Details are typically shared in the offer letter or program handbook.`,
    }),
    (post) => ({
      id: 'pool-growth',
      question: `Are there full-time opportunities after completing ${post.title} at ${post.organization}?`,
      answer: `High performers are often considered for extended roles or full-time conversion, but it is not guaranteed. Treat this ${TYPE_NOUN[post.type]} as a chance to demonstrate skills and build relationships at ${post.organization}.`,
    }),
    (post) => ({
      id: 'pool-fee',
      question: `Is there any fee to apply for ${post.title} at ${post.organization}?`,
      answer: post.fee
        ? `This listing mentions a fee of ${post.fee}. Only pay through official ${post.organization} channels and verify authenticity before submitting payment.`
        : `Legitimate opportunities from ${post.organization} should not charge application fees. Apply only through trusted links listed on this page.`,
    }),
    (post) => ({
      id: 'pool-timezone',
      question: `What time zone or working hours apply to ${post.title} at ${post.organization}?`,
      answer: `Working hours generally follow local business hours in ${post.location}. Confirm exact schedules with ${post.organization} if you are in a different region or need flexible timing.`,
    }),
    (post) => ({
      id: 'pool-relocation',
      question: `Does ${post.organization} offer relocation support for the ${post.title} ${TYPE_NOUN[post.type]} in ${post.location}?`,
      answer: `Relocation assistance depends on ${post.organization}'s policy and the seniority of this ${TYPE_NOUN[post.type]}. Ask the recruiting team during later interview stages if relocation applies to you.`,
    }),
    (post) => ({
      id: 'pool-assessment',
      question: `Will there be an online test or assignment for ${post.title} at ${post.organization}?`,
      answer: `Many ${POST_TYPE_LABELS[post.type].toLowerCase()} processes include aptitude tests, coding challenges, or case assignments. Prepare based on the skills listed for ${post.title} and allow uninterrupted time if invited.`,
    }),
    (post) => ({
      id: 'pool-visa',
      question: `Does ${post.organization} sponsor visas for the ${post.title} ${TYPE_NOUN[post.type]} in ${post.location}?`,
      answer: `Visa sponsorship varies by country, role level, and ${post.organization}'s policy. Candidates requiring sponsorship should clarify eligibility with the recruiting team early in the process.`,
    }),
    (post) => ({
      id: 'pool-team',
      question: `Which team will I work with as ${post.title} at ${post.organization}?`,
      answer: post.orgInfo?.department
        ? `This ${TYPE_NOUN[post.type]} is associated with ${post.orgInfo.department} at ${post.organization}. Team structure and reporting lines are usually explained during interviews.`
        : `Team placement for ${post.title} is typically confirmed during onboarding at ${post.organization}. Interviewers can share more about day-to-day collaborators.`,
    }),
    (post) => ({
      id: 'pool-start-date',
      question: `When is the expected start date for ${post.title} at ${post.organization}?`,
      answer: `Start dates depend on ${post.organization}'s hiring cycle and your notice period. The recruiter will confirm timelines after you clear the selection stages for this ${TYPE_NOUN[post.type]}.`,
    }),
  ];
}

function pickPoolIndices(slug: string, poolSize: number, count: number, exclude: Set<number>): number[] {
  const seed = hashSlug(slug);
  const picked: number[] = [];
  let n = 0;
  while (picked.length < count && n < poolSize * 3) {
    const idx = (seed + n * 2654435761) % poolSize;
    if (!exclude.has(idx) && !picked.includes(idx)) {
      picked.push(idx);
    }
    n++;
  }
  return picked;
}

function uniqueByQuestion(faqs: PostFaq[]): PostFaq[] {
  const seen = new Set<string>();
  return faqs.filter((faq) => {
    const key = faq.question.toLowerCase().replace(/\s+/g, ' ').trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function generatePostFaqs(post: PostDocument): PostFaq[] {
  const core = coreBuilders().map((b) => b(post));
  const pool = poolBuilders();
  const bonusIndices = pickPoolIndices(post.slug, pool.length, 4, new Set());
  const bonus = bonusIndices.map((idx) => pool[idx](post));

  let faqs = uniqueByQuestion([...core, ...bonus]);

  if (faqs.length < MIN_FAQS) {
    for (let i = 0; i < pool.length && faqs.length < MIN_FAQS; i++) {
      const idx = hashSlug(`${post.slug}#${i}`) % pool.length;
      faqs = uniqueByQuestion([...faqs, pool[idx](post)]);
    }
  }

  return faqs.slice(0, Math.max(MIN_FAQS, faqs.length));
}

// ponytail: assert-based self-check — fails if FAQ generator breaks uniqueness or minimum count
if (process.env.NODE_ENV !== 'production') {
  const sample: PostDocument = {
    type: 'internship',
    status: 'published',
    slug: 'hr-intern-deloitte',
    title: 'HR Intern',
    description: 'Sample',
    organization: 'Deloitte',
    country: 'IN',
    locale: 'en',
    location: 'Mumbai, India',
    workType: 'Full Time',
    compensation: '₹25,000/month',
    skills: ['Recruitment'],
    tags: [],
    logo: '👥',
    featured: false,
    requirements: [],
    responsibilities: [],
    benefits: [],
    eligibility: ['Open to graduates'],
    applicationProcess: [],
  };
  const faqs = generatePostFaqs(sample);
  console.assert(faqs.length >= MIN_FAQS, 'post-faqs: expected minimum FAQ count');
  console.assert(new Set(faqs.map((f) => f.question)).size === faqs.length, 'post-faqs: duplicate questions');
}
