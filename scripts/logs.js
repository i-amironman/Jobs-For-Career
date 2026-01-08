const fs = require('fs');
const path = require('path');

// Cross-platform development log viewer
function viewLogs() {
  const logPath = path.join(__dirname, '..', 'dev.log');
  
  if (fs.existsSync(logPath)) {
    try {
      const logContent = fs.readFileSync(logPath, 'utf8');
      const lines = logContent.split('\n');
      const recentLines = lines.slice(-20); // Show last 20 lines
      
      console.log('📋 Recent Development Logs:');
      console.log('─'.repeat(50));
      recentLines.forEach(line => {
        if (line.trim()) {
          console.log(line);
        }
      });
      console.log('─'.repeat(50));
    } catch (error) {
      console.log('⚠ Could not read log file');
    }
  } else {
    console.log('📝 No log file found. Start the development server first:');
    console.log('   npm run dev');
  }
}

if (require.main === module) {
  viewLogs();
}

module.exports = { viewLogs };