# JobsForCareer - Ultra-Lightweight Job Platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud)

### Installation & Setup
```bash
# Clone and install dependencies
npm install

# Set up project structure and environment
npm run setup

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run setup` | Set up project structure |
| `npm run clean` | Clean unnecessary files |
| `npm run optimize` | Optimize dependencies |
| `npm run reset` | Full project reset |

## 📁 Project Structure

```
jobsforcareer/
├── src/
│   ├── components/
│   │   ├── ui/           # Custom UI components
│   │   └── layout/       # Header, Footer
│   ├── lib/              # Utilities and database
│   └── app/              # Next.js app router
├── scripts/              # Cross-platform scripts
├── public/               # Static assets
└── package.json
```

## 🎨 Design System

- **Primary Color**: #FF6F00 (Vibrant Orange)
- **Secondary Color**: #FFF3E0 (Soft Cream)
- **Accent Color**: #424242 (Dark Gray)
- **Font**: Inter
- **Border Radius**: 16px
- **Responsive**: Mobile-first design

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS 4
- **Icons**: Custom SVG components
- **Components**: Custom lightweight UI

## 🌟 Features

- ✅ Ultra-lightweight (5 production dependencies)
- ✅ Cross-platform compatible
- ✅ Mobile-responsive design
- ✅ SEO optimized
- ✅ TypeScript support
- ✅ Custom icon system
- ✅ MongoDB integration

## 🔧 Environment Variables

Create a `.env` file in the root:

```env
MONGODB_URI=mongodb://localhost:27017/jobsforcareer
```

## 📦 Dependencies

### Production (5 total)
- `next` - React framework
- `react` & `react-dom` - UI library
- `mongodb` & `mongoose` - Database

### Development
- TypeScript, ESLint, Tailwind CSS

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Cross-Platform Notes
- All scripts work on Windows, macOS, and Linux
- No OS-specific commands used
- File operations use Node.js APIs
- Environment managed via .env files

## 📄 License

MIT License - feel free to use this project!