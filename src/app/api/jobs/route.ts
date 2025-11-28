import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase, collections } from '@/lib/db'
import { z } from 'zod'

// Schema validation
const jobSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  requirements: z.string().optional(),
  salary: z.string().optional(),
  location: z.string().min(1, 'Location is required'),
  type: z.enum(['FULL_TIME', 'PART_TIME', 'INTERNSHIP', 'CONTRACT', 'REMOTE']),
  experience: z.string().optional(),
  skills: z.array(z.string()).optional(),
  companyId: z.string().min(1, 'Company ID is required'),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
})

// GET /api/jobs - Get all jobs
export async function GET(request: NextRequest) {
  try {
    const db = await connectToDatabase()
    const { search } = Object.fromEntries(request.nextUrl.searchParams)

    let query = {}
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { location: { $regex: search, $options: 'i' } },
          { skills: { $regex: search, $options: 'i' } }
        ]
      }
    }

    const jobs = await collections.jobs()
      .find({ ...query, isActive: true })
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray()

    return NextResponse.json({ 
      success: true, 
      data: jobs,
      count: jobs.length 
    })
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}

// POST /api/jobs - Create a new job
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = jobSchema.parse(body)

    const db = await connectToDatabase()
    const result = await collections.jobs().insertOne({
      ...validatedData,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return NextResponse.json({
      success: true,
      data: result
    })
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create job' },
      { status: 500 }
    )
  }
}