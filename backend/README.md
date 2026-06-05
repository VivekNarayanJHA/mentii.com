# Mentor Backend

Express.js backend server for the Mentor application.

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration.

### Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 5000).

## Project Structure

```
src/
├── index.js           # Main entry point
├── config/            # Configuration files
├── routes/            # API routes
├── controllers/       # Route controllers
├── middleware/        # Custom middleware
├── utils/             # Utility functions
└── services/          # Business logic
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- Add more endpoints as needed

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development, production)
- `CORS_ORIGIN` - CORS allowed origin
- `API_BASE_URL` - API base URL

## License

MIT
