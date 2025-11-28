import { MongoClient, Db, Collection } from 'mongodb'

// MongoDB connection configuration
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_ATLAS_URI || 'mongodb+srv://username:password@cluster.mongodb.net/jobsforcareer?retryWrites=true&w=majority'
const MONGODB_DB = process.env.MONGODB_DB || process.env.MONGODB_ATLAS_DB || 'jobsforcareer'

// Database connection instance
let client: MongoClient | null = null
let db: Db | null = null

// Database collections
interface Collections {
  jobs: Collection<any>
  internships: Collection<any>
  contests: Collection<any>
  companies: Collection<any>
  users: Collection<any>
  applications: Collection<any>
}

// Connect to MongoDB Atlas with improved error handling
export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db; collections: Collections }> {
  // If connection already exists, return it
  if (client && db) {
    return { client, db, collections: getCollections(db) }
  }

  try {
    // Create new MongoDB client with Atlas connection options
    client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      retryWrites: true,
      w: 'majority',
      maxConnecting: 5,
      retryDelayMS: 1000,
      bufferMaxEntries: 0,
      maxIdleTimeMS: 10000,
      useUnifiedTopology: true
    })
    
    // Connect to the database
    await client.connect()
    db = client.db(MONGODB_DB)
    
    console.log('Connected to MongoDB Atlas successfully')
    console.log('Database:', MONGODB_DB)
    
    return { client, db, collections: getCollections(db) }
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error)
    // Don't throw immediately, return null for graceful handling
    return {
      client: null,
      db: null,
      collections: {
        jobs: null,
        internships: null,
        contests: null,
        companies: null,
        users: null,
        applications: null
      }
    }
  }
}

// Get database collections
function getCollections(db: Db): Collections {
  return {
    jobs: db.collection('jobs'),
    internships: db.collection('internships'),
    contests: db.collection('contests'),
    companies: db.collection('companies'),
    users: db.collection('users'),
    applications: db.collection('applications')
  }
}

// Close database connection
export async function closeDatabaseConnection(): Promise<void> {
  if (client) {
    await client.close()
    client = null
    db = null
    console.log('Disconnected from MongoDB Atlas')
  }
}

// Get database instance (for use in API routes)
export async function getDatabase(): Promise<Db> {
  const { db } = await connectToDatabase()
  return db
}

// Get collections instance (for use in API routes)
export async function getDatabaseCollections(): Promise<Collections> {
  const { collections } = await connectToDatabase()
  return collections
}

// Test database connection
export async function testConnection(): Promise<boolean> {
  try {
    const { client } = await connectToDatabase()
    await client.db('admin').command({ ping: 1 })
    console.log('MongoDB Atlas connection test: SUCCESS')
    return true
  } catch (error) {
    console.error('MongoDB Atlas connection test: FAILED', error)
    return false
  }
}