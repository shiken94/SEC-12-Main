require('dotenv').config();

module.exports = {
    port: process.env.PORT || 5000,
    db: {
        database: process.env.DB_NAME || 'task_master_pro',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'mendoz@6282',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
    }
}

