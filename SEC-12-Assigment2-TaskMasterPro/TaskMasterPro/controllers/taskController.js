const taskService = require("../services/taskService");

exports.create = async (req, res, next) => {
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
};

exports.findAll = async (req, res, next) => {
    try {
        const tasks = await taskService.getTasks();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

exports.findByPk = async (req, res, next) => {
    try {
        const task = await taskService.getTasks().id;
        res.json(task);
    } catch (err) {
        next(err);
    }
};

exports.updateTask = async (req, res, next) => {
    try {

        const { id } = req.params;
        const task = await taskService.getTasks().id;

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        await task.update(req.body);

        res.status(200).json({
            message: "Task updated successfully",
            data: task
        });

    } catch (error) {

        res.status(500).json({
            message: "Internal server error"
        });

    }
};