// Test database connection without blocking
import { connectToDatabase } from '@/lib/db'

export async function testConnection() {
  try {
    console.log('Testing MongoDB connection...')
    const db = await connectToDatabase()
    console.log('Database connection successful!')
    return db
  } catch (error) {
    console.error('Database connection failed:', error)
    return null
  }
}

// Test database operations
export async function testOperations() {
  try {
    const db = await connectToDatabase()
    
    // Test creating a test document
    const testJob = {
      title: 'Test Job',
      description: 'This is a test job',
      location: 'Test Location',
      type: 'FULL_TIME',
      isActive: true,
      isFeatured: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    const result = await db.collection('jobs').insertOne(testJob)
    console.log('Test job created:', result)
    
    // Test fetching
    const jobs = await db.collection('jobs').find({}).limit(5).toArray()
    console.log('Found jobs:', jobs.length)
    
    return { success: true, jobs }
  } catch (error) {
    console.error('Database operations failed:', error)
    return { success: false, error: error.message }
  }
}