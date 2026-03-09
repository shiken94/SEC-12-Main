const sequelize = require('../config/database')
const {DataTypes} = require("sequelize");

const User  = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
}, { underscored: true,  tableName: 'users'})

module.exports = User;
