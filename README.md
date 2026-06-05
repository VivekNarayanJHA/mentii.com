# Mentor Full Stack Application

A modern full-stack application with **Express.js** backend and **Next.js** frontend.

## 📋 Project Structure

```
mentor.com/
├── backend/              # Express.js backend server
│   ├── src/
│   │   ├── index.js      # Entry point
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Custom middleware
│   │   ├── services/     # Business logic
│   │   └── utils/        # Utility functions
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── frontend/             # Next.js frontend application
│   ├── src/
│   │   ├── app/          # Next.js app directory
│   │   ├── components/   # React components
│   │   ├── services/     # API client services
│   │   ├── hooks/        # Custom React hooks
│   │   ├── types/        # TypeScript types
│   │   ├── utils/        # Utility functions
│   │   └── styles/       # CSS styles
│   ├── public/           # Static assets
│   ├── package.json
│   ├── .env.example
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── README.md
│
└── README.md
```

## 🚀 Quick Start

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server (runs on port 5000)
npm run dev

# Or start production server
npm start
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Start development server (runs on port 3000)
npm run dev

# Or build for production
npm run build
npm start
```

### Access the Application

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)
- API Health Check: [http://localhost:5000/api/health](http://localhost:5000/api/health)

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **dotenv** - Environment variable management

### Frontend
- **Next.js 14** - React framework with server-side rendering
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client

## 📖 Features

### Backend
- RESTful API endpoints
- CORS enabled for frontend communication
- Morgan request logging
- Error handling middleware
- Health check endpoint (`/api/health`)
- Modular project structure

### Frontend
- Server-side rendering with Next.js
- TypeScript for type safety
- Responsive design with Tailwind CSS
- API client with Axios
- Components: Header, HealthStatus
- Environment-based configuration

## 🔧 Configuration

### Backend Environment Variables
```
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
API_BASE_URL=http://localhost:5000
```

### Frontend Environment Variables
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 📝 API Endpoints

### Health Check
- **GET** `/api/health` - Health check endpoint
- Response:
```json
{
  "status": "OK",
  "message": "Health check passed",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.45
}
```

## 🧪 Development

### Running Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## 🏗️ Build & Deployment

### Backend
```bash
cd backend
npm run build  # If applicable
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

## 📚 Additional Scripts

### Backend
- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Lint code

### Frontend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Lint code
- `npm run type-check` - Check TypeScript types

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🆘 Troubleshooting

### Backend Connection Issues
- Ensure backend is running on `http://localhost:5000`
- Check CORS configuration in `backend/src/index.js`
- Verify `NEXT_PUBLIC_API_URL` in frontend `.env.local`

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

## 📞 Support

For issues or questions, please create an issue in the repository.
