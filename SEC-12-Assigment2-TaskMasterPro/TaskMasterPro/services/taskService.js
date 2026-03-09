const taskRepository = require("../repositories/taskRepository");

class TaskService {
    async createTask(data) {
        return await taskRepository.create(data);
    }

    async getTasks() {
        return await taskRepository.findAll();
    }

    async getTask(id) {
        return await taskRepository.findById(id);
    }

    async deleteTask(id) {
        return await taskRepository.delete(id);
    }

    async updateTask(id) {
        return await taskRepository.update(id);
    }
}

module.exports = new TaskService();