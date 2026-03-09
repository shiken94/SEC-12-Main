const sequelize = require("../config/database");
const User = require('./userModel');
const Task = require('./taskModel');

/**
 * ONE-to-MANY
 * user -> tasks
 */
// Relationships

User.hasMany(Task, { foreignKey: "userId", onDelete: "CASCADE" });
Task.belongsTo(User, { foreignKey: "userId" });


module.exports = {sequelize, User, Task};
