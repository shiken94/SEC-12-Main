const express = require('express');
const {User} = require("../models");

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,

        });

        res.status(201).json({
            message: "User created successfully",
            data: user
        });

        res.status(200).json(user);


    } catch (e) {
        res.json({message: e.message });
    }
})

// Get all user
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
        })
        res.json(users);
    } catch (e) {
        res.json({status: 'error in reading users'})
    }
})

// Get user by id
router.get('/:id', async (req, res) => {
    try {
        const users = await User.findByPk(req.params.id)
        res.json(users);
    } catch (e) {
        res.status(404).json({
            message: "User not found"
        });
    }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await User.destroy({ where: { id: req.params.id } })
        res.status(204).send();
    } catch (e) {
        res.json({status: e.message })
        console.log(e, 'Delete user')
    }

})

module.exports = router;


