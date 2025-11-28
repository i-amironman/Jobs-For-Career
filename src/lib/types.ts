import { ObjectId } from 'mongodb'

// MongoDB schema types
export interface User {
  _id?: ObjectId
  email: string
  name?: string
  avatar?: string
  role: 'JOB_SEEKER' | 'EMPLOYER' | 'ADMIN'
  createdAt: Date
  updatedAt: Date
}

export interface Company {
  _id?: ObjectId
  name: string
  logo?: string
  website?: string
  description?: string
  industry?: string
  location?: string
  size?: string
  createdAt: Date
  updatedAt: Date
}

export interface Job {
  _id?: ObjectId
  title: string
  description: string
  requirements?: string
  salary?: string
  location: string
  type: 'FULL_TIME' | 'PART_TIME' | 'INTERNSHIP' | 'CONTRACT' | 'REMOTE'
  experience?: string
  skills: string[]
  companyId: ObjectId
  isActive: boolean
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Application {
  _id?: ObjectId
  userId: ObjectId
  jobId: ObjectId
  status: 'PENDING' | 'REVIEWED' | 'ACCEPTED' | 'REJECTED'
  coverLetter?: string
  createdAt: Date
  updatedAt: Date
}

export interface SavedJob {
  _id?: ObjectId
  userId: ObjectId
  jobId: ObjectId
  createdAt: Date
}

export interface Resume {
  _id?: ObjectId
  userId: ObjectId
  title: string
  content: string
  isDefault: boolean
  createdAt: Date
  updatedAt: Date
}