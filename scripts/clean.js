const fs = require('fs');
const path = require('path');

// Cross-platform file operations
function cleanProject() {
  const filesToRemove = [
    'src/components/ui/separator.tsx',
    'src/hooks/use-toast.ts',
    'src/components/ui/sonner.tsx',
    'src/components/ui/toaster.tsx',
    'src/app/api/route.ts'
  ];
  
  const dirsToRemove = [
    'examples',
    'db',
    'prisma',
    'src/app/api'
  ];
  
  // Remove files
  filesToRemove.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`✓ Removed: ${file}`);
      } catch (error) {
        console.log(`⚠ Could not remove: ${file}`);
      }
    }
  });
  
  // Remove directories
  dirsToRemove.forEach(dir => {
    const dirPath = path.join(__dirname, '..', dir);
    if (fs.existsSync(dirPath)) {
      try {
        fs.rmSync(dirPath, { recursive: true, force: true });
        console.log(`✓ Removed directory: ${dir}`);
      } catch (error) {
        console.log(`⚠ Could not remove directory: ${dir}`);
      }
    }
  });
}

if (require.main === module) {
  cleanProject();
}

module.exports = { cleanProject };