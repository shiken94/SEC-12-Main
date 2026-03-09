const { Task } = require("../models");

class TaskRepository {
    async create(data) {
        return Task.create(data);
    }

    async findAll() {
        return await Task.findAll();
    }

    async findById(id) {
        return await Task.findByPk(id);
    }

    async delete(id) {
        return await Task.destroy({ where: { id } });
    }
}

module.exports = new TaskRepository();