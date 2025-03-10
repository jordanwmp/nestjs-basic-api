# Todo List API

This is a simple Todo List API built with NestJS, Prisma, and SQLite. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on todo items.

## Features

- Create a new todo item
- Read all todo items
- Read a specific todo item by ID
- Update a todo item by ID
- Delete a todo item by ID

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Prisma**: A next-generation ORM that helps in accessing the database in a type-safe way.
- **SQLite**: A lightweight, disk-based database.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list-api.git
   cd todo-list-api

2. Install dependencies
  ```bash
  npm install

3. Set up Prisma
  ```bash
  npx prisma init

4. Run the Prisma migrations
  ```bash
  npx prisma migrate dev --name init

5. Start the application by running
  ```bash
  npm run start:dev 


This project is licensed under the MIT License. See the LICENSE file for details.
Feel free to customize it further to fit your needs. If you need any more help, let me know!
