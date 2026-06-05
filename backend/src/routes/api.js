// import express from 'express';
// import { healthCheck } from '../controllers/healthController.js';
// import {
//   getUsersController,
//   getUserByIdController,
//   createUserController,
//   updateUserController,
//   deleteUserController,
// } from '../controllers/userController.js';

// const router = express.Router();

// // Health check route
// router.get('/health', healthCheck);

// // User routes
// router.get('/users', getUsersController);
// router.get('/users/:id', getUserByIdController);
// router.post('/users', createUserController);
// router.put('/users/:id', updateUserController);
// router.delete('/users/:id', deleteUserController);

// // Welcome endpoint
// router.get('/', (req, res) => {
//   res.json({
//     message: 'API v1 - Welcome to Mentor Backend',
//     endpoints: {
//       health: '/api/health',
//       users: '/api/users',
//     }
//   });
// });

// export default router;
