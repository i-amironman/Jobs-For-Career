import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase, getDatabaseCollections } from '@/lib/db'
import { Contest, ApiResponse, PaginationParams, PaginatedResponse } from '@/lib/types'

// GET /api/contests - Fetch all contests with pagination and filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse pagination and filter parameters
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || ''
    const status = searchParams.get('status') || 'active'
    const sortBy = searchParams.get('sortBy') || 'deadline'
    const sortOrder = searchParams.get('sortOrder') || 'asc'
    
    const { collections } = await getDatabaseCollections()
    
    // Build query filter
    const filter: any = {}
    
    if (status === 'active') {
      filter.active = true
      filter.deadline = { $gt: new Date() }
    } else if (status === 'ended') {
      filter.deadline = { $lte: new Date() }
    }
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { organizer: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ]
    }
    
    if (category) {
      filter.category = { $regex: category, $options: 'i' }
    }
    
    // Build sort object
    const sort: any = {}
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1
    
    // Count total documents (with null check)
    let total = 0
    if (collections && collections.contests) {
      try {
        total = await collections.contests.countDocuments(filter)
      } catch (error) {
        console.error('Error counting documents:', error)
        total = 0
      }
    }
    
    // Fetch contests with pagination (with null check)
    let contests = []
    if (collections && collections.contests) {
      try {
        contests = await collections.contests
          .find(filter)
          .sort(sort)
          .skip((page - 1) * limit)
          .limit(limit)
          .toArray()
      } catch (error) {
        console.error('Error fetching contests:', error)
        contests = []
      }
    }
    
    // Create pagination response
    const response: PaginatedResponse<Contest> = {
      data: contests,
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
    } as ApiResponse<PaginatedResponse<Contest>>)
    
  } catch (error) {
    console.error('Error fetching contests:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch contests'
    } as ApiResponse, { status: 500 })
  }
}

// POST /api/contests - Create a new contest
export async function POST(request: NextRequest) {
  try {
    const contestData = await request.json()
    
    // Validate required fields
    const requiredFields = ['title', 'organizer', 'description', 'prize', 'deadline', 'startDate', 'endDate', 'category']
    for (const field of requiredFields) {
      if (!contestData[field]) {
        return NextResponse.json({
          success: false,
          error: `Missing required field: ${field}`
        } as ApiResponse, { status: 400 })
      }
    }
    
    const { collections } = await getDatabaseCollections()
    
    // Create new contest document
    const newContest: Omit<Contest, '_id'> = {
      ...contestData,
      startDate: new Date(contestData.startDate),
      endDate: new Date(contestData.endDate),
      deadline: new Date(contestData.deadline),
      posted: new Date(),
      featured: false,
      active: true,
      participants: 0,
      views: 0,
      tags: contestData.tags || [],
      rules: contestData.rules || []
    }
    
    // Insert contest into database
    const result = await collections.contests.insertOne(newContest)
    
    // Return created contest with ID
    const createdContest = await collections.contests.findOne({ _id: result.insertedId })
    
    return NextResponse.json({
      success: true,
      data: createdContest
    } as ApiResponse<Contest>, { status: 201 })
    
  } catch (error) {
    console.error('Error creating contest:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to create contest'
    } as ApiResponse, { status: 500 })
  }
}

// PUT /api/contests - Update a contest
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const contestId = searchParams.get('id')
    
    if (!contestId) {
      return NextResponse.json({
        success: false,
        error: 'Contest ID is required'
      } as ApiResponse, { status: 400 })
    }
    
    const updateData = await request.json()
    const { collections } = await getDatabaseCollections()
    
    // Update contest in database
    const result = await collections.contests.updateOne(
      { _id: contestId },
      { $set: { ...updateData, updatedAt: new Date() } }
    )
    
    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Contest not found'
      } as ApiResponse, { status: 404 })
    }
    
    // Return updated contest
    const updatedContest = await collections.contests.findOne({ _id: contestId })
    
    return NextResponse.json({
      success: true,
      data: updatedContest
    } as ApiResponse<Contest>)
    
  } catch (error) {
    console.error('Error updating contest:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to update contest'
    } as ApiResponse, { status: 500 })
  }
}

// DELETE /api/contests - Delete a contest
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const contestId = searchParams.get('id')
    
    if (!contestId) {
      return NextResponse.json({
        success: false,
        error: 'Contest ID is required'
      } as ApiResponse, { status: 400 })
    }
    
    const { collections } = await getDatabaseCollections()
    
    // Delete contest from database
    const result = await collections.contests.deleteOne({ _id: contestId })
    
    if (result.deletedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Contest not found'
      } as ApiResponse, { status: 404 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contest deleted successfully'
    } as ApiResponse)
    
  } catch (error) {
    console.error('Error deleting contest:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to delete contest'
    } as ApiResponse, { status: 500 })
  }
}