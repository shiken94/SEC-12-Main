const express = require('express');
const {Task} = require("../models");

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            userId: req.body.userId,

        });

        res.status(201).json({
            message: "Task created successfully",
            data: task
        });

        res.status(200).json(task);


    } catch (e) {
        res.json({message: e.message });
    }
})

// Get all task
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll({
        })
        res.json(tasks);
    } catch (e) {
        res.json({status: 'error in reading task'})
    }
})

// Get task by id
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id)
        res.json(task);
    } catch (e) {
        res.status(404).json({
            message: "Task not not found"
        });
    }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Task.destroy({ where: { id: req.params.id } })
        res.status(204).send();
    } catch (e) {
        res.json({status: e.message })
        console.log(e, 'Delete task')
    }

})

// Update task
router.put('/:id', async (req, res) => {
    try {
        const tasks = await Task.update(req.body,
            {
                where: { id: req.params.id }
            }
        )
        res.json(tasks);
        res.status(204).send();
    } catch (e) {
        res.json({status: e.message })
        console.log(e, 'Delete task')
    }

})

module.exports = router;


