# Mentor Backend

Express.js backend server for the Mentor application with MongoDB integration.

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- MongoDB Atlas account

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
```

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

## Database Models

### User Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  role: String (enum: 'student', 'mentor', 'admin'),
  profile: {
    bio: String,
    avatar: String,
    phone: String
  },
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Mentor Schema
```javascript
{
  userId: ObjectId (ref: User),
  expertise: [String],
  experience: Number,
  hourlyRate: Number,
  availability: String,
  bio: String,
  certifications: [String],
  rating: Number (0-5),
  totalStudents: Number,
  totalSessions: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Session Schema
```javascript
{
  mentorId: ObjectId (ref: Mentor),
  studentId: ObjectId (ref: User),
  topic: String,
  description: String,
  scheduledAt: Date,
  duration: Number (minutes),
  status: String (enum: 'scheduled', 'ongoing', 'completed', 'cancelled'),
  notes: String,
  feedback: {
    rating: Number,
    comment: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Health Check
- **GET** `/api/health` - Server health check
- **Response:**
```json
{
  "status": "OK",
  "message": "Health check passed",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.45
}
```

### User Endpoints

#### Get All Users
- **GET** `/api/users`
- **Response:**
```json
{
  "success": true,
  "data": [...],
  "count": 5
}
```

#### Get User by ID
- **GET** `/api/users/:id`
- **Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

#### Create User
- **POST** `/api/users`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

#### Update User
- **PUT** `/api/users/:id`
- **Body:** (partial update)
```json
{
  "name": "Jane Doe",
  "profile": {
    "bio": "Updated bio"
  }
}
```

#### Delete User
- **DELETE** `/api/users/:id`
- **Response:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

## Project Structure

```
src/
├── index.js                    # Main entry point
├── config/
│   └── database.js            # MongoDB connection
├── models/
│   ├── User.js               # User schema
│   ├── Mentor.js             # Mentor schema
│   └── Session.js            # Session schema
├── routes/
│   └── api.js                # API routes
├── controllers/
│   ├── healthController.js   # Health check logic
│   └── userController.js     # User CRUD logic
├── services/
│   └── dbService.js          # Database services
├── middleware/               # Custom middleware
├── utils/
│   └── logger.js            # Logging utility
└── config/                   # Configuration files
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development, production)
- `CORS_ORIGIN` - CORS allowed origin
- `API_BASE_URL` - API base URL
- `MONGODB_URI` - MongoDB connection string (Atlas)

## Testing Endpoints

You can test the API using cURL, Postman, or any HTTP client:

```bash
# Get all users
curl http://localhost:5000/api/users

# Create a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"pass123","role":"student"}'

# Get user by ID
curl http://localhost:5000/api/users/<user_id>

# Update user
curl -X PUT http://localhost:5000/api/users/<user_id> \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane"}'

# Delete user
curl -X DELETE http://localhost:5000/api/users/<user_id>
```

## MongoDB Atlas Connection

### Connection String Format
```
mongodb+srv://username:password@cluster.mongodb.net/database_name
```

### Features
- Cloud-hosted MongoDB
- Automatic backups
- SSL encryption
- Monitoring & alerts
- Scalable clusters

## Security Considerations

1. **Never commit .env file** - It contains sensitive credentials
2. **Use environment variables** - For all configuration
3. **Implement authentication** - Use JWT tokens for API security
4. **Hash passwords** - Use bcrypt for password hashing
5. **Validate input** - Sanitize all user input
6. **Enable CORS** - Only allow trusted origins

## Next Steps

1. Implement JWT authentication
2. Add password hashing with bcrypt
3. Create more API endpoints (mentors, sessions)
4. Add validation middleware
5. Implement error handling
6. Write unit tests
7. Add rate limiting
8. Deploy to production

## Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB URI in `.env` file
- Check MongoDB Atlas IP whitelist
- Ensure network connection is stable
- Check database credentials

### Port Already in Use
```bash
# Find process on port 5000
lsof -ti:5000

# Kill process
kill -9 <PID>
```

## License

MIT

