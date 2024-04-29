# React Node MySQL CRUD App

This project is a simple CRUD (Create, Read, Update, Delete) application using React, Node.js, and MySQL. It allows you to manage a list of users, with capabilities to add, update, and delete users from a MySQL database.

## Prerequisites

Before you begin, ensure you have installed the following:
- Node.js (https://nodejs.org/)
- MySQL (https://www.mysql.com/downloads/)
- npm (comes with Node.js)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Screenshots

![Screenshot 1](https://i.postimg.cc/13x3sr0K/Capture.png)
![Screenshot 2](https://i.postimg.cc/xTN1w4mC/Capture2.png)
![Screenshot 3](https://i.postimg.cc/nhvcz90f/Capture3.png)

### Setting Up the Database

1. **Create the MySQL Database and User Table**

    Start by logging into your MySQL server. You can use MySQL command line, phpMyAdmin, or any other MySQL database management tool. Execute the following SQL script to create your database and user table:

    ```sql
    CREATE DATABASE IF NOT EXISTS crudApp;
    USE crudApp;

    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
    );
    ```

2. **Configure the MySQL Connection**

    Open `server.js` in the backend directory and edit the MySQL connection configuration with your MySQL user and password.

    ```javascript
    const dbConnectionConfig = {
        host: 'localhost',
        user: 'yourUsername',
        password: 'yourPassword',
        database: 'crudApp'
    };
    ```
    ```javascript
    // For Me
    const dbConnectionConfig = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'crudApp'
    };
    ```

### Setting Up the Backend

Navigate to the backend directory and install the required packages:

```bash
cd backend
npm install
```

Start the server:

```bash
npm start
```

The server will run on `http://localhost:5000`.

### Setting Up the Frontend

Navigate to the frontend directory:

```bash
cd react-frontend
```

Install the dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The React app will run on `http://localhost:3000`. It will automatically open in your default web browser.

## Usage

Once both servers are running, you can use the React application to add, update, and delete users. Data changes will persist in the MySQL database.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Node.js](https://nodejs.org/) - The server environment
- [MySQL](https://www.mysql.com/) - Database
- [Express](http://expressjs.com/) - Node.js web application framework
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

## Authors

- **Marjana Begum**
