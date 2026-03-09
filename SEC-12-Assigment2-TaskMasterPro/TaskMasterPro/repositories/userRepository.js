const { User } = require("../models");

class UserRepository {
    async create(data) {
        return User.create(data);
    }

    async findAll() {
        return await User.findAll();
    }

    async findById(id) {
        return await User.findByPk(id);
    }

    async delete(id) {
        return await User.destroy({ where: { id } });
    }
}

module.exports = new UserRepository();