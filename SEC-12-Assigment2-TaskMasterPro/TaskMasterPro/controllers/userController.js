const userService = require("../services/userService");

exports.create = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

exports.findAll = async (req, res, next) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

exports.findByPk = async (req, res, next) => {
    try {
        const users = await userService.getUsers().id;
        res.json(users);
    } catch (err) {
        next(err);
    }
};

