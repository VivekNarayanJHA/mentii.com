import User from '../models/User.js';

class UserRepository{
     // create a new user 
     async createUser(userData){
        return await User.create(userData);
     }

     // find a user by id 
     async findUserById(userId){
        return await User.findById(userId);
     }

     //  find user by email 
     async  findByEmail(email){
        return await User.findOne({email});
     }
     // update user details 

     async updateUser(userId, updateData){
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
        // this { new: true } by this return  a  new document.


     }
     // detail user by id
      async deleteUser(userId){
        return await User.findByIdAndDelete(userId);
      }
     // get all users
     async getAllUsers(){
        return await User.find({role}); 

     }
     // check if email exists
     async emailExists(email){
        const user = await User.exists({email});
        return !!user;
     }
     /**
   * Update refresh token
   */
  async updateRefreshToken(userId, refreshToken) {
    return await User.findByIdAndUpdate(
      userId,
      { refreshToken },
      { new: true }
    );
  }
}

export default new UserRepository();