import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase, collections } from '@/lib/db'
import { z } from 'zod'

// Schema validation
const userSchema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().optional(),
  avatar: z.string().optional(),
  role: z.enum(['JOB_SEEKER', 'EMPLOYER', 'ADMIN']).default('JOB_SEEKER'),
})

// GET /api/users - Get all users
export async function GET(request: NextRequest) {
  try {
    const db = await connectToDatabase()
    const users = await collections.users()
      .find({})
      .project({ password: 0 }) // Exclude password field
      .toArray()

    return NextResponse.json({
      success: true,
      data: users,
      count: users.length
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

// POST /api/users - Create a new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = userSchema.parse(body)

    const db = await connectToDatabase()
    
    // Check if user already exists
    const existingUser = await collections.users().findOne({ email: validatedData.email })
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User with this email already exists' },
        { status: 409 }
      )
    }

    const result = await collections.users().insertOne({
      ...validatedData,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return NextResponse.json({
      success: true,
      data: result
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    )
  }
}