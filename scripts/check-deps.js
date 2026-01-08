const fs = require('fs');
const path = require('path');

// Cross-platform dependency checker
function checkDependencies() {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const deps = Object.keys(packageJson.dependencies || {});
    const devDeps = Object.keys(packageJson.devDependencies || {});
    
    console.log('📦 Dependencies Analysis:');
    console.log('─'.repeat(40));
    console.log(`Production dependencies: ${deps.length}`);
    console.log(`Development dependencies: ${devDeps.length}`);
    console.log(`Total dependencies: ${deps.length + devDeps.length}`);
    console.log('');
    
    console.log('📋 Production Dependencies:');
    deps.forEach(dep => {
      console.log(`  ✓ ${dep}@${packageJson.dependencies[dep]}`);
    });
    
    console.log('');
    console.log('🛠️ Development Dependencies:');
    devDeps.forEach(dep => {
      console.log(`  ✓ ${dep}@${packageJson.devDependencies[dep]}`);
    });
    
    console.log('');
    console.log('🎯 Optimization Status:');
    if (deps.length <= 5) {
      console.log('  ✅ Ultra-lightweight (≤5 deps)');
    } else if (deps.length <= 10) {
      console.log('  ✅ Lightweight (≤10 deps)');
    } else {
      console.log('  ⚠️ Could be optimized');
    }
    
  } catch (error) {
    console.log('⚠ Could not read package.json');
  }
}

if (require.main === module) {
  checkDependencies();
}

module.exports = { checkDependencies };