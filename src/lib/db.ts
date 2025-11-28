import { MongoClient, Db, ServerApi } from 'mongodb'

// MongoDB connection utility
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobsforcareer'
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let client: MongoClient
let db: Db

export async function connectToDatabase() {
  if (client) {
    return db
  }

  try {
    client = new MongoClient(uri, options)
    await client.connect()
    db = client.db()
    console.log('Connected to MongoDB successfully')
    return db
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw error
  }
}

export async function disconnectFromDatabase() {
  if (client) {
    await client.close()
    console.log('Disconnected from MongoDB')
  }
}

export function getDatabase() {
  if (!db) {
    throw new Error('Database not initialized. Call connectToDatabase() first.')
  }
  return db
}

// Collections
export const collections = {
  users: () => getDatabase().collection('users'),
  companies: () => getDatabase().collection('companies'),
  jobs: () => getDatabase().collection('jobs'),
  applications: () => getDatabase().collection('applications'),
  savedJobs: () => getDatabase().collection('savedJobs'),
  resumes: () => getDatabase().collection('resumes'),
}