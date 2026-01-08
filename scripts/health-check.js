const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Cross-platform application health check
function healthCheck() {
  console.log('🔍 JobsForCareer Health Check');
  console.log('─'.repeat(40));
  
  try {
    // Check if required files exist
    const requiredFiles = [
      'package.json',
      '.env',
      'src/app/layout.tsx',
      'src/app/page.tsx',
      'src/app/globals.css',
      'tailwind.config.ts',
      'next.config.ts'
    ];
    
    console.log('📁 Checking required files...');
    requiredFiles.forEach(file => {
      const filePath = path.join(__dirname, '..', file);
      if (fs.existsSync(filePath)) {
        console.log(`  ✅ ${file}`);
      } else {
        console.log(`  ❌ ${file} - MISSING`);
      }
    });
    
    // Check dependencies
    console.log('\n📦 Checking dependencies...');
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
    const deps = Object.keys(packageJson.dependencies || {});
    
    if (deps.length <= 5) {
      console.log(`  ✅ Ultra-lightweight (${deps.length} production deps)`);
    } else {
      console.log(`  ⚠️ Could be optimized (${deps.length} production deps)`);
    }
    
    // Check environment variables
    console.log('\n🔧 Checking environment...');
    const envPath = path.join(__dirname, '..', '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      if (envContent.includes('MONGODB_URI')) {
        console.log('  ✅ MongoDB URI configured');
      } else {
        console.log('  ⚠️ MongoDB URI missing');
      }
    } else {
      console.log('  ❌ .env file missing');
    }
    
    // Check TypeScript compilation
    console.log('\n🔨 Checking TypeScript compilation...');
    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe', cwd: path.join(__dirname, '..') });
      console.log('  ✅ TypeScript compilation successful');
    } catch (error) {
      console.log('  ❌ TypeScript compilation failed');
    }
    
    // Check ESLint
    console.log('\n📋 Checking code quality...');
    try {
      execSync('npm run lint', { stdio: 'pipe', cwd: path.join(__dirname, '..') });
      console.log('  ✅ No ESLint errors');
    } catch (error) {
      console.log('  ❌ ESLint errors found');
    }
    
    console.log('\n🎯 Health Check Complete!');
    console.log('💡 To start the application: npm run dev');
    
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
  }
}

if (require.main === module) {
  healthCheck();
}

module.exports = { healthCheck };