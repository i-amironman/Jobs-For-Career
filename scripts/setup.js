const fs = require('fs');
const path = require('path');

// Cross-platform project setup
function setupProject() {
  console.log('🚀 Setting up JobsForCareer project...');
  
  // Create necessary directories
  const dirsToCreate = [
    'src/components/layout',
    'src/components/ui',
    'src/lib',
    'src/hooks',
    'scripts'
  ];
  
  dirsToCreate.forEach(dir => {
    const dirPath = path.join(__dirname, '..', dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✓ Created directory: ${dir}`);
    }
  });
  
  // Update .env file
  const envPath = path.join(__dirname, '..', '.env');
  const envContent = `MONGODB_URI=mongodb://localhost:27017/jobsforcareer
ADMIN_PASSWORD=admin123
NEXT_PUBLIC_DEFAULT_COUNTRY=IN
NEXT_PUBLIC_BASE_URL=https://jobsforcareer.com
`;
  
  try {
    fs.writeFileSync(envPath, envContent);
    console.log('✓ Updated .env file');
  } catch (error) {
    console.log('⚠ Could not update .env file');
  }
  
  console.log('✅ Project setup complete!');
}

if (require.main === module) {
  setupProject();
}

module.exports = { setupProject };