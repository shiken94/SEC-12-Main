const sequelize = require('../config/database')
const {DataTypes} = require("sequelize");

const Task  = sequelize.define("Task", {

    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    title: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },

    status: {
        type: DataTypes.STRING(20),
        defaultValue: "pending",
    },

    description: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },

    dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },

    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
}, { underscored: true, tableName: 'tasks'})

module.exports = Task;
