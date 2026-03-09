const express = require('express');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('./models')

const app = express();

app.use(express.json());

app.use("/users", userRoutes)
app.use("/tasks", taskRoutes)

module.exports = app;
