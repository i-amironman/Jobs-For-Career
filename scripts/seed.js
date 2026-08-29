/**
 * Seed MongoDB with sample posts from hardcoded data.
 * Run: node scripts/seed.js
 */
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobsforcareer';

const PostSchema = new mongoose.Schema(
  {
    type: String,
    status: { type: String, default: 'published' },
    slug: { type: String, unique: true },
    title: String,
    description: String,
    organization: String,
    country: String,
    locale: String,
    location: String,
    workType: String,
    compensation: String,
    amount: String,
    fee: String,
    deadline: String,
    skills: [String],
    tags: [String],
    logo: String,
    applyUrl: String,
    featured: Boolean,
    requirements: [String],
    responsibilities: [String],
    benefits: [String],
    eligibility: [String],
    applicationProcess: [String],
    orgInfo: Object,
    legacyId: String,
    publishedAt: Date,
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 80);
}

const longDescription = (base) =>
  base + ' '.repeat(50) +
  'Join our team and grow your career with industry-leading benefits, mentorship programs, and a collaborative culture. ' +
  'We value diversity, innovation, and continuous learning. Apply today to take the next step in your professional journey. ' +
  'Our organization is committed to providing equal opportunities for all qualified candidates regardless of background.';

const seedPosts = [
  // Jobs
  { type: 'job', title: 'Senior Frontend Developer', organization: 'TechCorp Solutions', country: 'US', location: 'San Francisco, CA', workType: 'Full Time', compensation: '$120-150k', skills: ['React', 'TypeScript', 'Node.js'], logo: '🏢', featured: true, legacyId: '1' },
  { type: 'job', title: 'Product Manager', organization: 'StartupHub', country: 'US', location: 'New York, NY', workType: 'Full Time', compensation: '$90-120k', skills: ['Product Strategy', 'Agile'], logo: '🚀', featured: true, legacyId: '2' },
  { type: 'job', title: 'UX Designer', organization: 'Design Studio Pro', country: 'GLOBAL', location: 'Remote', workType: 'Remote', compensation: '$70-90k', skills: ['Figma', 'UI/UX'], logo: '🎨', featured: false, legacyId: '3' },
  { type: 'job', title: 'Data Scientist', organization: 'Analytics Inc', country: 'IN', location: 'Bangalore, India', workType: 'Full Time', compensation: '₹15-25 LPA', skills: ['Python', 'ML', 'SQL'], logo: '📊', featured: true, legacyId: '4' },
  { type: 'job', title: 'DevOps Engineer', organization: 'CloudFirst', country: 'GB', location: 'London, UK', workType: 'Hybrid', compensation: '£60-80k', skills: ['AWS', 'Docker', 'K8s'], logo: '☁️', featured: false, legacyId: '5' },
  { type: 'job', title: 'Marketing Manager', organization: 'BrandBoost', country: 'CA', location: 'Toronto, Canada', workType: 'Full Time', compensation: 'C$75-95k', skills: ['Digital Marketing', 'SEO'], logo: '📣', featured: false, legacyId: '6' },
  // Internships
  { type: 'internship', title: 'Software Engineering Intern', organization: 'Google', country: 'US', location: 'Mountain View, CA', workType: 'Full Time', compensation: '$8,000/month', skills: ['Java', 'Python', 'Algorithms'], logo: '🔍', featured: true, legacyId: '1' },
  { type: 'internship', title: 'Data Analytics Intern', organization: 'Microsoft', country: 'IN', location: 'Hyderabad, India', workType: 'Full Time', compensation: '₹50,000/month', skills: ['Excel', 'SQL', 'Power BI'], logo: '🪟', featured: true, legacyId: '2' },
  { type: 'internship', title: 'UI/UX Design Intern', organization: 'Adobe', country: 'GLOBAL', location: 'Remote', workType: 'Remote', compensation: '$4,000/month', skills: ['Figma', 'Design Systems'], logo: '🎨', featured: false, legacyId: '3' },
  { type: 'internship', title: 'Marketing Intern', organization: 'HubSpot', country: 'US', location: 'Boston, MA', workType: 'Hybrid', compensation: '$3,500/month', skills: ['Content Marketing', 'SEO'], logo: '📈', featured: false, legacyId: '4' },
  { type: 'internship', title: 'Finance Intern', organization: 'Goldman Sachs', country: 'GB', location: 'London, UK', workType: 'Full Time', compensation: '£3,000/month', skills: ['Financial Modeling', 'Excel'], logo: '💰', featured: true, legacyId: '5' },
  { type: 'internship', title: 'HR Intern', organization: 'Deloitte', country: 'IN', location: 'Mumbai, India', workType: 'Full Time', compensation: '₹25,000/month', skills: ['Recruitment', 'HR Operations'], logo: '👥', featured: false, legacyId: '6' },
  // Scholarships
  { type: 'scholarship', title: 'Merit Scholarship Program', organization: 'Gates Foundation', country: 'GLOBAL', location: 'Worldwide', amount: '$50,000/year', skills: ['STEM', 'Research'], logo: '🎓', featured: true, legacyId: '1' },
  { type: 'scholarship', title: 'Women in Tech Scholarship', organization: 'Google', country: 'US', location: 'United States', amount: '$10,000', skills: ['Computer Science', 'Engineering'], logo: '👩‍💻', featured: true, legacyId: '2' },
  { type: 'scholarship', title: 'National Merit Scholarship', organization: 'Government of India', country: 'IN', location: 'India', amount: '₹2,00,000/year', skills: ['Academic Excellence'], logo: '🇮🇳', featured: false, legacyId: '3' },
  // Govt Jobs
  { type: 'govt-job', title: 'Software Developer (Grade A)', organization: 'UPSC India', country: 'IN', location: 'New Delhi, India', workType: 'Full Time', compensation: '₹56,100-1,77,500/month', skills: ['Java', 'Database'], logo: '🏛️', featured: true, legacyId: '1' },
  { type: 'govt-job', title: 'Cybersecurity Analyst', organization: 'Department of Homeland Security', country: 'US', location: 'Washington, DC', workType: 'Full Time', compensation: '$85,000-110,000/year', skills: ['Cybersecurity', 'Network Admin'], logo: '🔒', featured: true, legacyId: '2' },
  // Competitions
  { type: 'competition', title: 'Global Hackathon 2026', organization: 'TechFest', country: 'GLOBAL', location: 'Online', fee: 'Free', compensation: '$50,000 prize pool', tags: ['Hackathon', 'Coding'], logo: '🏆', featured: true },
  { type: 'competition', title: 'Case Study Challenge', organization: 'BCG', country: 'US', location: 'Online', fee: 'Free', compensation: 'Internship offers', tags: ['Consulting', 'Business'], logo: '📋', featured: true },
  // Mock Tests
  { type: 'mock-test', title: 'Product Manager Mock Test', organization: 'JobsForCareer Prep', country: 'GLOBAL', location: 'Online', skills: ['Product Roadmapping', 'Analytics'], logo: '📝', featured: true },
  { type: 'mock-test', title: 'Software Engineer Mock Test', organization: 'JobsForCareer Prep', country: 'GLOBAL', location: 'Online', skills: ['DSA', 'System Design'], logo: '💻', featured: false },
  // Mock Interview
  { type: 'mock-interview', title: 'AI Mock Interview - Data Scientist', organization: 'JobsForCareer AI', country: 'GLOBAL', location: 'Online', skills: ['Python', 'ML', 'Statistics'], logo: '🤖', featured: true },
  // Mentorship
  { type: 'mentorship', title: '1-on-1 Career Guidance', organization: 'JobsForCareer Mentors', country: 'IN', location: 'Online', compensation: '₹500/session', skills: ['Career Planning', 'Resume Review'], logo: '🎯', featured: true },
  { type: 'mentorship', title: 'Interview Preparation', organization: 'Expert Mentors Network', country: 'US', location: 'Online', compensation: '$30/session', skills: ['Behavioral', 'Technical'], logo: '💬', featured: false },
  // Prep Resources
  { type: 'prep-resource', title: '100 Days to Code', organization: 'JobsForCareer', country: 'GLOBAL', location: 'Self-paced', tags: ['Coding', 'DSA'], logo: '💻', featured: true },
  { type: 'prep-resource', title: 'Resume Builder Pro', organization: 'JobsForCareer', country: 'GLOBAL', location: 'Online Tool', tags: ['Resume', 'Career'], logo: '📄', featured: false },
];

async function seed() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('Connected. Seeding posts...');

  let created = 0;
  let skipped = 0;

  for (const item of seedPosts) {
    const slug = slugify(`${item.title}-${item.organization}`);
    const exists = await Post.findOne({ slug });
    if (exists) {
      skipped++;
      continue;
    }

    await Post.create({
      ...item,
      slug,
      status: 'published',
      locale: item.country === 'IN' ? 'en-IN' : item.country === 'US' ? 'en-US' : 'en',
      description: longDescription(`${item.title} at ${item.organization}. ${item.location}.`),
      requirements: ['Relevant degree or equivalent experience', 'Strong communication skills'],
      responsibilities: ['Contribute to team projects', 'Collaborate with cross-functional teams'],
      benefits: ['Competitive compensation', 'Health benefits', 'Learning opportunities'],
      eligibility: ['Open to qualified candidates', 'Must meet location requirements'],
      applicationProcess: ['Submit application online', 'Complete assessment', 'Attend interview'],
      publishedAt: new Date(),
    });
    created++;
  }

  console.log(`Done. Created: ${created}, Skipped: ${skipped}`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
