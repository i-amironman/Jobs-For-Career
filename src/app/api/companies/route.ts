import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase, collections } from '@/lib/db'
import { z } from 'zod'

// Schema validation
const companySchema = z.object({
  name: z.string().min(1, 'Company name is required'),
  logo: z.string().optional(),
  website: z.string().optional(),
  description: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  size: z.string().optional(),
})

// GET /api/companies - Get all companies
export async function GET(request: NextRequest) {
  try {
    const db = await connectToDatabase()
    const companies = await collections.companies()
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({
      success: true,
      data: companies,
      count: companies.length
    })
  } catch (error) {
    console.error('Error fetching companies:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch companies' },
      { status: 500 }
    )
  }
}

// POST /api/companies - Create a new company
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = companySchema.parse(body)

    const db = await connectToDatabase()
    const result = await collections.companies().insertOne({
      ...validatedData,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return NextResponse.json({
      success: true,
      data: result
    })
  } catch (error) {
    console.error('Error creating company:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create company' },
      { status: 500 }
    )
  }
}