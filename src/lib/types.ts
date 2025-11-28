// Job related types
export interface Job {
  _id?: string
  title: string
  company: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  salary: string
  description: string
  requirements: string[]
  posted: Date
  deadline?: Date
  featured: boolean
  active: boolean
  logo?: string
  category: string
  tags: string[]
  views: number
  applications: number
}

export interface Internship {
  _id?: string
  title: string
  company: string
  location: string
  duration: string
  stipend: string
  description: string
  requirements: string[]
  posted: Date
  deadline?: Date
  featured: boolean
  active: boolean
  logo?: string
  category: string
  tags: string[]
  views: number
  applications: number
}

export interface Contest {
  _id?: string
  title: string
  organizer: string
  description: string
  prize: string
  deadline: Date
  startDate: Date
  endDate: Date
  participants: number
  maxParticipants?: number
  category: string
  tags: string[]
  rules: string[]
  featured: boolean
  active: boolean
  logo?: string
  views: number
}

// Company related types
export interface Company {
  _id?: string
  name: string
  description: string
  industry: string
  size: string
  location: string
  website: string
  email: string
  phone?: string
  logo?: string
  founded: number
  verified: boolean
  active: boolean
  socialLinks: {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
  }
  jobsPosted: number
  rating: number
  reviews: number
}

// User related types
export interface User {
  _id?: string
  name: string
  email: string
  password: string
  phone?: string
  location?: string
  bio?: string
  avatar?: string
  resume?: string
  skills: string[]
  education: {
    degree: string
    institution: string
    year: number
  }[]
  experience: {
    title: string
    company: string
    duration: string
    description: string
  }[]
  preferences: {
    jobTypes: string[]
    locations: string[]
    categories: string[]
    salaryRange: string
  }
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
  verified: boolean
  active: boolean
  createdAt: Date
  lastLogin?: Date
}

// Application related types
export interface Application {
  _id?: string
  userId: string
  jobId?: string
  internshipId?: string
  contestId?: string
  type: 'job' | 'internship' | 'contest'
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected'
  appliedAt: Date
  resume?: string
  coverLetter?: string
  additionalInfo?: string
  notes?: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Pagination types
export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  search?: string
  category?: string
  location?: string
  type?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Form types
export interface JobFormData {
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  category: string
  tags: string[]
}

export interface InternshipFormData {
  title: string
  company: string
  location: string
  duration: string
  stipend: string
  description: string
  requirements: string[]
  category: string
  tags: string[]
}

export interface ContestFormData {
  title: string
  organizer: string
  description: string
  prize: string
  deadline: Date
  startDate: Date
  endDate: Date
  category: string
  tags: string[]
  rules: string[]
  maxParticipants?: number
}

export interface UserFormData {
  name: string
  email: string
  password: string
  phone?: string
  location?: string
  bio?: string
  skills: string[]
  education: {
    degree: string
    institution: string
    year: number
  }[]
  experience: {
    title: string
    company: string
    duration: string
    description: string
  }[]
}