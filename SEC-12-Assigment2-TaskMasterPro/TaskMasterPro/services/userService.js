const userRepository = require("../repositories/userRepository");

class UserService {
    async createUser(data) {
        return await userRepository.create(data);
    }

    async getUsers() {
        return await userRepository.findAll();
    }

    async getUser(id) {
        return await userRepository.findById(id);
    }

    async deleteUser(id) {
        return await userRepository.delete(id);
    }
}

module.exports = new UserService();