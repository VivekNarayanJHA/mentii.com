import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    await mongoose.connect(mongoURI);

    logger.info('✓ MongoDB connected successfully');
    logger.info(`Connected to: ${mongoURI.split('@')[1]?.split('/')[0] || 'MongoDB Atlas'}`);
    
    return mongoose.connection;
  } catch (error) {
    logger.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  logger.warn('MongoDB disconnected');
});

mongoose.connection.on('error', (error) => {
  logger.error(`MongoDB error: ${error.message}`);
});

export default connectDB;
