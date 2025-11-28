// Simple test without imports
const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobsforcareer'

async function testConnection() {
  console.log('Testing MongoDB connection...')
  try {
    const client = new MongoClient(uri)
    await client.connect()
    console.log('✅ MongoDB connection successful!')
    
    const db = client.db()
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
    console.log('✅ Test job created:', result)
    
    const jobs = await db.collection('jobs').find({}).limit(5).toArray()
    console.log('✅ Found jobs:', jobs.length)
    
    await client.close()
    console.log('✅ MongoDB operations successful!')
    
    return { success: true, jobs: jobs.length }
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error)
    return { success: false, error: error.message }
  }
}

testConnection()