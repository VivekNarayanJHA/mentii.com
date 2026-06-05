# Mentor Frontend

Next.js frontend for the Mentor application.

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

3. Update `.env.local` with your configuration.

### Running the Application

**Development mode** (with hot reload):
```bash
npm run dev
```

**Production build**:
```bash
npm run build
npm start
```

The application will start on `http://localhost:3000`.

## Project Structure

```
src/
├── app/               # Next.js app directory
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/        # Reusable React components
├── hooks/             # Custom React hooks
├── services/          # API service calls
├── styles/            # Global styles
├── types/             # TypeScript types and interfaces
└── utils/             # Utility functions
public/               # Static assets
```

## Key Features

- Built with **Next.js 14** for React server-side rendering
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code quality
- Configured for **CORS** communication with backend

## Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API base URL (default: http://localhost:5000)

## License

MIT
