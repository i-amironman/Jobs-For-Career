import { testConnection, testOperations } from '@/lib/test-db'

// Simple test to verify database is working
console.log('Testing JobsForCareer.com database connection...')

testConnection()
  .then(() => {
    console.log('Testing database operations...')
    return testOperations()
  })
  .then((result) => {
    if (result.success) {
      console.log('✅ Database operations successful!')
      console.log('📊 JobsForCareer.com database is ready!')
    } else {
      console.error('❌ Database operations failed:', result.error)
    }
  })
  .catch((error) => {
    console.error('❌ Database test failed:', error)
  })