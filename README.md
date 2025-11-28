# JobsForCareer.com - Jobs & Internships Platform

A production-ready Next.js 15 career platform for students and freshers with optimized dependencies and lightweight design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS 4
- **Optimized Dependencies**: Reduced node_modules size by 40% (810MB vs 1.3GB)
- **Responsive Design**: Mobile-first approach with shadcn/ui components
- **SEO Optimized**: Complete metadata, OpenGraph, and structured data
- **Lightweight Icons**: Using react-icons instead of heavy icon libraries
- **System Fonts**: No custom font loading for faster performance
- **Dark Mode**: Built-in theme support
- **Component Library**: Pre-built UI components with consistent design system

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd jobsforcareer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="file:./dev.db"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Optional: Z.ai SDK
Z_AI_API_KEY="your-z-ai-api-key"
```

### 4. Database Setup
```bash
# Initialize Prisma and create database
npm run db:push

# Generate Prisma client
npm run db:generate
```

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at **http://localhost:3000**

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and design system
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/             # Layout components
│   │   ├── header.tsx      # Navigation header
│   │   ├── footer.tsx      # Footer component
│   │   └── layout.tsx      # Layout wrapper
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── db.ts              # Prisma database client
│   └── utils.ts           # Utility functions
└── hooks/                 # Custom React hooks
```

## 🎨 Design System

### Color Palette
- **Primary**: #FF6F00 (Vibrant Orange)
- **Secondary**: #FFF3E0 (Soft Cream)
- **Accent**: #424242 (Dark Gray)
- **Background**: #FFFFFF (White)
- **Foreground**: #424242 (Text)

### Custom Utilities
- `.job-card` - Standardized job listing cards
- `.btn-primary` - Primary button styling
- `.input-field` - Consistent input fields
- `.text-gradient` - Orange gradient text
- `.container-max` - Max-width container
- `.section-padding` - Consistent section spacing

## 📱 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma client
npm run db:migrate    # Run database migrations
npm run db:reset      # Reset database

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
```

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL="your-production-database-url"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"
```

## 📊 Performance Optimizations

### Dependency Optimization
- **Removed heavy packages**: Framer Motion, React Hook Form, TanStack Query
- **Lightweight icons**: Switched from lucide-react to react-icons
- **Minimal UI components**: Kept only essential Radix UI components
- **System fonts**: Removed Google Fonts for faster loading
- **Size reduction**: 40% smaller node_modules (810MB vs 1.3GB)

### Bundle Size
The application uses tree-shaking and only imports necessary components:
- react-icons: Individual icon imports
- Radix UI: Only used components
- Tailwind CSS: Purged unused styles

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration with custom theme
- `next.config.ts` - Next.js configuration
- `prisma/schema.prisma` - Database schema
- `components.json` - shadcn/ui configuration

## 🎯 Design Principles

1. **Mobile-First**: Responsive design with mobile priority
2. **Accessibility**: WCAG compliant components
3. **Performance**: Optimized loading and interactions
4. **SEO**: Search engine optimization
5. **User Experience**: Clean, intuitive interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m "Add feature"`
6. Push to branch: `git push origin feature-name`
7. Open a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   
   # Or use different port
   npm run dev -- -p 3001
   ```

2. **Database connection issues**
   ```bash
   # Reset database
   npm run db:reset
   
   # Check DATABASE_URL in .env.local
   ```

3. **Build errors**
   ```bash
   # Clear cache and reinstall
   rm -rf .next node_modules package-lock.json
   npm install
   npm run build
   ```

4. **Missing dependencies**
   ```bash
   # Ensure all dependencies are installed
   npm install
   
   # Check for missing types
   npm install --save-dev @types/node @types/react @types/react-dom
   ```

### Performance Tips

1. **Development**: Use `npm run dev` for hot reloading
2. **Production testing**: Build and test locally before deployment
3. **Bundle analysis**: Use `npm run build` to check bundle size
4. **Database**: Use SQLite for development, PostgreSQL for production

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section above
- Review the documentation

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS