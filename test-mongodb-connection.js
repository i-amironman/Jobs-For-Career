import { testConnection } from './src/lib/db.js'

async function testMongoDBAtlasConnection() {
  console.log('🔍 Testing MongoDB Atlas connection...')
  console.log('📋 Make sure you have updated your .env.local file with your Atlas connection string')
  console.log('')
  
  try {
    const isConnected = await testConnection()
    
    if (isConnected) {
      console.log('✅ MongoDB Atlas connection successful!')
      console.log('🎉 Your database is ready to use')
      console.log('')
      console.log('📝 Next steps:')
      console.log('1. Update your .env.local with your actual Atlas connection string')
      console.log('2. Run npm run dev to start the development server')
      console.log('3. Your application will now use MongoDB Atlas for data storage')
    } else {
      console.log('❌ MongoDB Atlas connection failed!')
      console.log('')
      console.log('🔧 Troubleshooting steps:')
      console.log('1. Check your MongoDB Atlas connection string in .env.local')
      console.log('2. Ensure your IP address is whitelisted in Atlas')
      console.log('3. Verify your database user has correct permissions')
      console.log('4. Check if your cluster is running')
      console.log('')
      console.log('📖 MongoDB Atlas Setup Guide:')
      console.log('1. Log in to MongoDB Atlas: https://cloud.mongodb.com/')
      console.log('2. Select your cluster')
      console.log('3. Click "Connect"')
      console.log('4. Select "Drivers" -> "Node.js"')
      console.log('5. Copy the connection string')
      console.log('6. Update your .env.local file with the connection string')
      console.log('7. Add your IP address to whitelist (0.0.0.0.0/0 for development)')
    }
  } catch (error) {
    console.error('💥 Error testing connection:', error.message)
  }
}

testMongoDBAtlasConnection()