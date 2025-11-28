import { Job, Internship, Contest } from '@/lib/types'

// Fetch data from API endpoints
export async function fetchLatestJobs(limit: number = 3): Promise<Job[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/jobs?limit=${limit}&sortBy=posted&sortOrder=desc`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch jobs')
    }
    
    const data = await response.json()
    return data.success ? data.data.data : []
  } catch (error) {
    console.error('Error fetching latest jobs:', error)
    return []
  }
}

export async function fetchTopInternships(limit: number = 3): Promise<Internship[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/internships?limit=${limit}&sortBy=posted&sortOrder=desc`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch internships')
    }
    
    const data = await response.json()
    return data.success ? data.data.data : []
  } catch (error) {
    console.error('Error fetching top internships:', error)
    return []
  }
}

export async function fetchOngoingContests(limit: number = 3): Promise<Contest[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/contests?limit=${limit}&status=active&sortBy=deadline&sortOrder=asc`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch contests')
    }
    
    const data = await response.json()
    return data.success ? data.data.data : []
  } catch (error) {
    console.error('Error fetching ongoing contests:', error)
    return []
  }
}

// Format job data for display
export function formatJobForDisplay(job: Job) {
  return {
    id: job._id,
    title: job.title,
    company: job.company,
    location: job.location,
    type: job.type,
    salary: job.salary,
    posted: formatRelativeTime(job.posted),
    featured: job.featured,
    logo: job.logo || '🏢',
    category: job.category,
    tags: job.tags,
    views: job.views,
    applications: job.applications
  }
}

// Format internship data for display
export function formatInternshipForDisplay(internship: Internship) {
  return {
    id: internship._id,
    title: internship.title,
    company: internship.company,
    location: internship.location,
    duration: internship.duration,
    stipend: internship.stipend,
    posted: formatRelativeTime(internship.posted),
    featured: internship.featured,
    logo: internship.logo || '🤖',
    category: internship.category,
    tags: internship.tags,
    views: internship.views,
    applications: internship.applications
  }
}

// Format contest data for display
export function formatContestForDisplay(contest: Contest) {
  const daysLeft = Math.ceil((contest.deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  
  return {
    id: contest._id,
    title: contest.title,
    organizer: contest.organizer,
    prize: contest.prize,
    deadline: daysLeft > 0 ? `${daysLeft} days left` : 'Ended',
    participants: contest.participants,
    featured: contest.featured,
    logo: contest.logo || '🏆',
    category: contest.category,
    tags: contest.tags,
    views: contest.views,
    isActive: daysLeft > 0
  }
}

// Format relative time (e.g., "2 days ago", "1 week ago")
function formatRelativeTime(date: Date | string): string {
  const now = new Date()
  const pastDate = new Date(date)
  const diffInMs = now.getTime() - pastDate.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) {
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
    if (diffInHours === 0) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
      return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes} minutes ago`
    }
    return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`
  } else if (diffInDays === 1) {
    return '1 day ago'
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7)
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`
  } else {
    const months = Math.floor(diffInDays / 30)
    return months === 1 ? '1 month ago' : `${months} months ago`
  }
}

// Get sample data for fallback
export function getSampleJobs() {
  return [
    {
      id: '1',
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Bangalore, India',
      type: 'Internship',
      salary: '₹15,000-25,000/month',
      posted: '2 days ago',
      featured: true,
      logo: '🏢'
    },
    {
      id: '2',
      title: 'Junior Software Engineer',
      company: 'StartupHub',
      location: 'Remote',
      type: 'Full-time',
      salary: '₹8-12 LPA',
      posted: '1 week ago',
      featured: true,
      logo: '🚀'
    },
    {
      id: '3',
      title: 'Marketing Associate',
      company: 'DigitalPro',
      location: 'Mumbai, India',
      type: 'Full-time',
      salary: '₹4-6 LPA',
      posted: '3 days ago',
      featured: true,
      logo: '📈'
    }
  ]
}

export function getSampleInternships() {
  return [
    {
      id: '1',
      title: 'Data Science Intern',
      company: 'AI Innovations',
      location: 'Pune, India',
      duration: '3 months',
      stipend: '₹10,000/month',
      posted: '1 day ago',
      logo: '🤖'
    },
    {
      id: '2',
      title: 'Web Development Intern',
      company: 'WebCraft',
      location: 'Remote',
      duration: '2 months',
      stipend: '₹8,000/month',
      posted: '4 days ago',
      logo: '💻'
    },
    {
      id: '3',
      title: 'Business Development Intern',
      company: 'GrowthMasters',
      location: 'Delhi, India',
      duration: '6 months',
      stipend: '₹12,000/month',
      posted: '1 week ago',
      logo: '📊'
    }
  ]
}

export function getSampleContests() {
  return [
    {
      id: '1',
      title: 'Hackathon 2024',
      organizer: 'TechCommunity',
      prize: '₹1,00,000',
      deadline: '15 days left',
      participants: '500+',
      logo: '🏆'
    },
    {
      id: '2',
      title: 'Coding Challenge',
      organizer: 'CodeArena',
      prize: '₹50,000',
      deadline: '7 days left',
      participants: '1000+',
      logo: '💻'
    },
    {
      id: '3',
      title: 'Design Competition',
      organizer: 'CreativeHub',
      prize: '₹25,000',
      deadline: '20 days left',
      participants: '200+',
      logo: '🎨'
    }
  ]
}