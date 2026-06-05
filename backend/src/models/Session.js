import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema(
  {
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentor',
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    description: String,
    scheduledAt: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      default: 60, // in minutes
    },
    status: {
      type: String,
      enum: ['scheduled', 'ongoing', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    notes: String,
    feedback: {
      rating: Number,
      comment: String,
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model('Session', sessionSchema);

export default Session;
