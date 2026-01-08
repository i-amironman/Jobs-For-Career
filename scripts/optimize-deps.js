const fs = require('fs');
const path = require('path');

// Cross-platform dependency management
function optimizeDependencies() {
  const packagesToRemove = [
    'framer-motion',
    'next-auth', 
    'next-intl',
    'next-themes',
    'sonner',
    'tailwindcss-animate',
    'z-ai-web-dev-sdk',
    'zustand',
    'zod',
    'tailwind-merge',
    'date-fns',
    '@radix-ui/react-label',
    '@radix-ui/react-separator',
    '@radix-ui/react-slot',
    '@radix-ui/react-toast',
    'class-variance-authority',
    'axios',
    'lucide-react',
    'sharp',
    'nodemon',
    'tsx'
  ];
  
  console.log('🧹 Optimizing dependencies for ultra-lightweight setup...');
  
  // Remove packages one by one
  packagesToRemove.forEach(pkg => {
    const { execSync } = require('child_process');
    try {
      execSync(`npm uninstall ${pkg}`, { stdio: 'pipe' });
      console.log(`✓ Removed: ${pkg}`);
    } catch (error) {
      console.log(`⚠ Could not remove: ${pkg}`);
    }
  });
  
  console.log('✅ Dependency optimization complete!');
}

if (require.main === module) {
  optimizeDependencies();
}

module.exports = { optimizeDependencies };