import express from 'express';
import { healthCheck } from '../controllers/healthController.js';

const router = express.Router();

// Health check route
router.get('/health', healthCheck);

// Welcome endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'API v1 - Welcome to Mentor Backend',
    endpoints: {
      health: '/api/health'
    }
  });
});

export default router;
