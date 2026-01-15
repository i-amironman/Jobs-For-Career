#!/bin/bash

echo "🧪 Testing fresh installation process..."

# Clean up
echo "📦 Cleaning up existing installation..."
rm -rf node_modules
rm -rf .next

# Install dependencies
echo "📥 Installing dependencies with 'npm install'..."
npm install

# Check Next.js version
echo "🔍 Checking Next.js version..."
npx next --version

# Start dev server in background
echo "🚀 Starting development server..."
npm run dev &
SERVER_PID=$!

# Wait for server to start
sleep 8

# Test critical pages
echo "🧪 Testing critical pages..."
HOME_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
ABOUT_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/about)
JOBS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/jobs/3)

echo "📊 Test Results:"
echo "  Home page: $HOME_STATUS"
echo "  About page: $ABOUT_STATUS"
echo "  Jobs page: $JOBS_STATUS"

# Kill server
kill $SERVER_PID 2>/dev/null

# Final check
if [ "$HOME_STATUS" = "200" ] && [ "$ABOUT_STATUS" = "200" ] && [ "$JOBS_STATUS" = "200" ]; then
    echo "✅ All tests passed! The setup works correctly with 'npm install' only."
    exit 0
else
    echo "❌ Some tests failed. Please check the setup."
    exit 1
fi