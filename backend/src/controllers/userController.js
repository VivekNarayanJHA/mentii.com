import userService from '../services/user.service.js';

class UserController{
   async createUser(req,res){
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json({
        success: true,
        data: user,
      });

    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }

   }
}

export default new UserController();