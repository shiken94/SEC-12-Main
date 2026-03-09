# Task Master Pro REST API

A RESTful API built using ExpressJS, Sequelize ORM, and PostgreSQL.  
This API allows management of Users and Tasks with proper relational database design using foreign keys.

# 📦 Installation Steps

### 1. Clone the Repository

git clone https://github.com/shiken94/SEC-12-Main.git

### 2. Install Dependencies

npm install express sequelize pg pg-hstore dotenv

### 3. Start the Server

npm start
Server will run at http://localhost:5000

# 📦 Database Setup

1. Create Database

Login to PostgreSQL and run:

CREATE DATABASE task_master_pro;

2. Create Tables

Run the following SQL script:

CREATE TABLE users (
    id UUID PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
    id UUID PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    description VARCHAR(200),
    due_date TIMESTAMP,
    user_id UUID NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_tasks_users
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE INDEX idx_user_email
ON users(email);

CREATE INDEX idx_task_user
ON tasks(user_id);


📡 API Documentation

Base URL:

http://localhost:5000/

👤 Users API
Get All Users
GET /users

Response:

[
  {
        "id": "22222222-2222-2222-2222-222222222222",
        "name": "Siti Aminah",
        "email": "siti@example.com",
        "createdAt": "2026-03-09T11:55:20.571Z",
        "updatedAt": "2026-03-09T11:55:20.571Z"
    },
    {
        "id": "ac67ee0c-f281-40f9-9b66-1ab136d16077",
        "name": "Siti Asminah",
        "email": "siwti@example.com",
        "createdAt": "2026-03-09T04:52:55.726Z",
        "updatedAt": "2026-03-09T04:52:55.726Z"
    },
    {
        "id": "96b747cd-d7d2-455f-8621-d5a8e984207d",
        "name": "Siti Asminah",
        "email": "sisti@example.com",
        "createdAt": "2026-03-09T05:26:09.745Z",
        "updatedAt": "2026-03-09T05:26:09.745Z"
    }
]

Get User by ID
GET /users/:id

Example:

GET /users/ac67ee0c-f281-40f9-9b66-1ab136d16077

Response:

[
    {
        "id": "ac67ee0c-f281-40f9-9b66-1ab136d16077",
        "name": "Siti Asminah",
        "email": "siwti@example.com",
        "createdAt": "2026-03-09T04:52:55.726Z",
        "updatedAt": "2026-03-09T04:52:55.726Z"
    }
]

Create User
POST /users

Body:

 {
        "name": "Siti",
        "email": "sii@example.com"
 }

Response:

[
    {
        "message": "User created successfully",
        "data": {
            "id": "fadff90f-c881-4531-aa7c-72c8953811a7",
            "name": "Siti",
            "email": "sii@example.com",
            "updatedAt": "2026-03-09T06:28:12.416Z",
            "createdAt": "2026-03-09T06:28:12.416Z"
        }
    }
]

Delete User
DELETE /users/:id

Example:

DELETE /users/ac67ee0c-f281-40f9-9b66-1ab136d16077

Response:

204 No Content

✅ Tasks API

Get All Tasks
GET /tasks

Create Task
POST /tasks

Body:

{
  "title": "Build API",
  "status": "pending",
  "user_id": "11111111-1111-1111-1111-111111111111"
}

Get Tasks by User
GET /users/:id/tasks

Delete Task
DELETE /tasks/:id

Update Task
PUT /tasks/:id


📊 Database Relationship
Users
  │
  │ 1..*
  ▼
Tasks

A user can have multiple tasks.

⚡ HTTP Status Codes Used
Code	Description
200	Success
201	Resource Created
204	No Content
404	Not Found


