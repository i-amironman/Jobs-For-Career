# MongoDB Atlas Integration Guide

## 🚀 Quick Setup

### 1. Get Your MongoDB Atlas Connection String

1. **Log in to MongoDB Atlas**: https://cloud.mongodb.com/
2. **Select your cluster** or create a new one
3. **Click "Connect"** on your cluster
4. **Select "Drivers"** → **"Node.js"**
5. **Copy the connection string** (it should look like this):
   ```
   mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
   ```

### 2. Configure Environment Variables

Update your `.env.local` file with your Atlas connection string:

```env
# MongoDB Atlas Configuration
MONGODB_ATLAS_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/jobsforcareer?retryWrites=true&w=majority
MONGODB_ATLAS_DB=jobsforcareer
```

### 3. Network Configuration

**For Development:**
- Add your IP address to MongoDB Atlas whitelist
- Use `0.0.0.0/0` for local development
- Go to Atlas → Network Access → Add IP Address

**For Production:**
- Add your server's IP address
- Consider using VPC peering for better security

### 4. Test Connection

Run the test script:
```bash
node test-mongodb-connection.js
```

### 5. Start Development

```bash
npm run dev
```

## 🔧 MongoDB Atlas Features Enabled

### Connection Pooling
- Max connections: 10
- Connection timeout: 5 seconds
- Socket timeout: 45 seconds
- Retry writes: Enabled
- Write concern: Majority

### Database Collections
- `jobs` - Job listings
- `internships` - Internship opportunities  
- `contests` - Competition listings
- `companies` - Company profiles
- `users` - User accounts
- `applications` - Job applications

### Security Features
- Connection string authentication
- IP whitelisting
- SSL/TLS encryption
- Role-based access control

## 📊 API Endpoints

All endpoints now use MongoDB Atlas:

### Jobs API
```
GET    /api/jobs
POST   /api/jobs
PUT    /api/jobs?id=<jobId>
DELETE /api/jobs?id=<jobId>
```

### Internships API
```
GET    /api/internships
POST   /api/internships
PUT    /api/internships?id=<internshipId>
DELETE /api/internships?id=<internshipId>
```

### Contests API
```
GET    /api/contests
POST   /api/contests
PUT    /api/contests?id=<contestId>
DELETE /api/contests?id=<contestId>
```

## 🔍 Query Examples

### Search Jobs
```bash
curl "http://localhost:3000/api/jobs?search=developer&location=bangalore&limit=10"
```

### Filter Internships
```bash
curl "http://localhost:3000/api/internships?duration=3months&category=tech&sortOrder=desc"
```

### Active Contests
```bash
curl "http://localhost:3000/api/contests?status=active&sortBy=deadline"
```

## 🛠️ Development Commands

### Test Connection
```bash
node test-mongodb-connection.js
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🔒 Security Best Practices

1. **Environment Variables**: Never commit `.env.local` to version control
2. **IP Whitelisting**: Only allow trusted IP addresses
3. **Database Users**: Create separate users for different environments
4. **Connection String**: Use `mongodb+srv` for better SSL handling
5. **Network Access**: Regularly review and update IP whitelist
6. **Monitoring**: Enable MongoDB Atlas monitoring and alerts

## 🚨 Troubleshooting

### Connection Issues
1. **Check connection string** in `.env.local`
2. **Verify IP whitelist** in Atlas
3. **Ensure cluster is running** in Atlas
4. **Check network connectivity** and firewall settings
5. **Validate user permissions** in Atlas

### Performance Issues
1. **Monitor connection pool** usage
2. **Check query performance** in Atlas
3. **Review index usage** on collections
4. **Optimize query patterns** in your code

## 📈 Production Deployment

### Environment Variables
```env
MONGODB_ATLAS_URI=mongodb+srv://user:pass@cluster.mongodb.net/db?retryWrites=true&w=majority
MONGODB_ATLAS_DB=your_production_db
```

### Atlas Configuration
- Enable cluster monitoring
- Set up alerts for high CPU/memory
- Configure automatic backups
- Enable performance advisor
- Set up data encryption at rest

## 🎯 Next Steps

1. **Update your connection string** in `.env.local`
2. **Test the connection** using the test script
3. **Start development server** with `npm run dev`
4. **Verify data persistence** in MongoDB Atlas dashboard
5. **Monitor performance** using Atlas metrics

Your JobsForCareer.com platform is now fully integrated with MongoDB Atlas! 🎉