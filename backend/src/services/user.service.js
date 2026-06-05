import userRepository from '../repositories/user.repository.js';

class UserService{
    async createUser(userData){
        const exists = await userRepository.findByEmail(userData.email);
        if(exists) {
            throw new Error('User with this email already exists');
        }
        const user = await userRepository.createUser(userData);
        return user;
    }
}

export default new UserService();