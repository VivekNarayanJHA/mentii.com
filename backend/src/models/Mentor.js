import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    expertise: {
      type: [String],
      required: true,
    },
    experience: {
      type: Number,
      min: 0,
    },
    hourlyRate: {
      type: Number,
      min: 0,
    },
    availability: {
      type: String,
      enum: ['available', 'busy', 'unavailable'],
      default: 'available',
    },
    bio: String,
    certifications: [String],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    totalStudents: {
      type: Number,
      default: 0,
    },
    totalSessions: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor;
