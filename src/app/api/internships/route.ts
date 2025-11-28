import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase, getDatabaseCollections } from '@/lib/db'
import { Internship, ApiResponse, PaginationParams, PaginatedResponse } from '@/lib/types'

// GET /api/internships - Fetch all internships with pagination and filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse pagination and filter parameters
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const location = searchParams.get('location') || ''
    const duration = searchParams.get('duration') || ''
    const sortBy = searchParams.get('sortBy') || 'posted'
    const sortOrder = searchParams.get('sortOrder') || 'desc'
    
    const { collections } = await getDatabaseCollections()
    
    // Build query filter
    const filter: any = { active: true }
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ]
    }
    
    if (category) {
      filter.category = { $regex: category, $options: 'i' }
    }
    
    if (location) {
      filter.location = { $regex: location, $options: 'i' }
    }
    
    if (duration) {
      filter.duration = { $regex: duration, $options: 'i' }
    }
    
    // Build sort object
    const sort: any = {}
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1
    
    // Count total documents (with null check)
    let total = 0
    if (collections && collections.internships) {
      try {
        total = await collections.internships.countDocuments(filter)
      } catch (error) {
        console.error('Error counting documents:', error)
        total = 0
      }
    }
    
    // Fetch internships with pagination (with null check)
    let internships = []
    if (collections && collections.internships) {
      try {
        internships = await collections.internships
          .find(filter)
          .sort(sort)
          .skip((page - 1) * limit)
          .limit(limit)
          .toArray()
      } catch (error) {
        console.error('Error fetching internships:', error)
        internships = []
      }
    }
    
    // Create pagination response
    const response: PaginatedResponse<Internship> = {
      data: internships,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1
      }
    }
    
    return NextResponse.json({
      success: true,
      data: response
    } as ApiResponse<PaginatedResponse<Internship>>)
    
  } catch (error) {
    console.error('Error fetching internships:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch internships'
    } as ApiResponse, { status: 500 })
  }
}

// POST /api/internships - Create a new internship
export async function POST(request: NextRequest) {
  try {
    const internshipData = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'company', 'location', 'duration', 'stipend', 'description', 'category']
    for (const field of requiredFields) {
      if (!internshipData[field]) {
        return NextResponse.json({
          success: false,
          error: `Missing required field: ${field}`
        } as ApiResponse, { status: 400 })
      }
    }
    
    const { collections } = await getDatabaseCollections()
    
    // Create new internship document
    const newInternship: Omit<Internship, '_id'> = {
      ...internshipData,
      posted: new Date(),
      featured: false,
      active: true,
      views: 0,
      applications: 0,
      requirements: internshipData.requirements || [],
      tags: internshipData.tags || []
    }
    
    // Insert internship into database
    const result = await collections.internships.insertOne(newInternship)
    
    // Return created internship with ID
    const createdInternship = await collections.internships.findOne({ _id: result.insertedId })
    
    return NextResponse.json({
      success: true,
      data: createdInternship
    } as ApiResponse<Internship>, { status: 201 })
    
  } catch (error) {
    console.error('Error creating internship:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to create internship'
    } as ApiResponse, { status: 500 })
  }
}

// PUT /api/internships - Update an internship
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const internshipId = searchParams.get('id')
    
    if (!internshipId) {
      return NextResponse.json({
        success: false,
        error: 'Internship ID is required'
      } as ApiResponse, { status: 400 })
    }
    
    const updateData = await request.json()
    const { collections } = await getDatabaseCollections()
    
    // Update internship in database
    const result = await collections.internships.updateOne(
      { _id: internshipId },
      { $set: { ...updateData, updatedAt: new Date() } }
    )
    
    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Internship not found'
      } as ApiResponse, { status: 404 })
    }
    
    // Return updated internship
    const updatedInternship = await collections.internships.findOne({ _id: internshipId })
    
    return NextResponse.json({
      success: true,
      data: updatedInternship
    } as ApiResponse<Internship>)
    
  } catch (error) {
    console.error('Error updating internship:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to update internship'
    } as ApiResponse, { status: 500 })
  }
}

// DELETE /api/internships - Delete an internship
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const internshipId = searchParams.get('id')
    
    if (!internshipId) {
      return NextResponse.json({
        success: false,
        error: 'Internship ID is required'
      } as ApiResponse, { status: 400 })
    }
    
    const { collections } = await getDatabaseCollections()
    
    // Delete internship from database
    const result = await collections.internships.deleteOne({ _id: internshipId })
    
    if (result.deletedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Internship not found'
      } as ApiResponse, { status: 404 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Internship deleted successfully'
    } as ApiResponse)
    
  } catch (error) {
    console.error('Error deleting internship:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to delete internship'
    } as ApiResponse, { status: 500 })
  }
}