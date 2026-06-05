// import User from '../models/User.js';
// import Mentor from '../models/Mentor.js';
// import Session from '../models/Session.js';
// import { logger } from '../utils/logger.js';

// // User Services
// export const userService = {
//   async createUser(userData) {
//     try {
//       const user = new User(userData);
//       await user.save();
//       logger.info(`User created: ${user.email}`);
//       return user.toJSON();
//     } catch (error) {
//       logger.error(`Error creating user: ${error.message}`);
//       throw error;
//     }
//   },

//   async getUserById(userId) {
//     try {
//       const user = await User.findById(userId);
//       return user?.toJSON() || null;
//     } catch (error) {
//       logger.error(`Error fetching user: ${error.message}`);
//       throw error;
//     }
//   },

//   async getAllUsers() {
//     try {
//       const users = await User.find({});
//       return users.map(user => user.toJSON());
//     } catch (error) {
//       logger.error(`Error fetching users: ${error.message}`);
//       throw error;
//     }
//   },

//   async updateUser(userId, updateData) {
//     try {
//       const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
//       return user?.toJSON() || null;
//     } catch (error) {
//       logger.error(`Error updating user: ${error.message}`);
//       throw error;
//     }
//   },

//   async deleteUser(userId) {
//     try {
//       const user = await User.findByIdAndDelete(userId);
//       logger.info(`User deleted: ${user?.email}`);
//       return true;
//     } catch (error) {
//       logger.error(`Error deleting user: ${error.message}`);
//       throw error;
//     }
//   },
// };

// // Mentor Services
// export const mentorService = {
//   async createMentor(mentorData) {
//     try {
//       const mentor = new Mentor(mentorData);
//       await mentor.save();
//       logger.info(`Mentor created for user: ${mentorData.userId}`);
//       return mentor;
//     } catch (error) {
//       logger.error(`Error creating mentor: ${error.message}`);
//       throw error;
//     }
//   },

//   async getMentorById(mentorId) {
//     try {
//       const mentor = await Mentor.findById(mentorId).populate('userId');
//       return mentor;
//     } catch (error) {
//       logger.error(`Error fetching mentor: ${error.message}`);
//       throw error;
//     }
//   },

//   async getAllMentors() {
//     try {
//       const mentors = await Mentor.find({}).populate('userId');
//       return mentors;
//     } catch (error) {
//       logger.error(`Error fetching mentors: ${error.message}`);
//       throw error;
//     }
//   },

//   async updateMentor(mentorId, updateData) {
//     try {
//       const mentor = await Mentor.findByIdAndUpdate(mentorId, updateData, { new: true });
//       return mentor;
//     } catch (error) {
//       logger.error(`Error updating mentor: ${error.message}`);
//       throw error;
//     }
//   },
// };

// // Session Services
// export const sessionService = {
//   async createSession(sessionData) {
//     try {
//       const session = new Session(sessionData);
//       await session.save();
//       logger.info(`Session created: ${session._id}`);
//       return session;
//     } catch (error) {
//       logger.error(`Error creating session: ${error.message}`);
//       throw error;
//     }
//   },

//   async getSessionById(sessionId) {
//     try {
//       const session = await Session.findById(sessionId)
//         .populate('mentorId')
//         .populate('studentId');
//       return session;
//     } catch (error) {
//       logger.error(`Error fetching session: ${error.message}`);
//       throw error;
//     }
//   },

//   async getAllSessions() {
//     try {
//       const sessions = await Session.find({})
//         .populate('mentorId')
//         .populate('studentId');
//       return sessions;
//     } catch (error) {
//       logger.error(`Error fetching sessions: ${error.message}`);
//       throw error;
//     }
//   },

//   async updateSession(sessionId, updateData) {
//     try {
//       const session = await Session.findByIdAndUpdate(sessionId, updateData, { new: true });
//       return session;
//     } catch (error) {
//       logger.error(`Error updating session: ${error.message}`);
//       throw error;
//     }
//   },
// };

// export default {
//   userService,
//   mentorService,
//   sessionService,
// };
