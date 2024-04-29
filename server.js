const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Creating a connection object for initial setup
const initialDbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

// Creating a connection object for database operations
const dbConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudApp'
};

// Connect and check if DB exists, create if not
initialDbConnection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Server for initial setup.');
    initialDbConnection.query("CREATE DATABASE IF NOT EXISTS crudApp", function (err, result) {
        if (err) throw err;
        console.log("Database checked/created.");
    });
    initialDbConnection.end();
});

// Now use the database specific connection
const db = mysql.createConnection(dbConnectionConfig);
db.connect(err => {
    if (err) { throw err; }
    console.log('Connected to database crudApp');
    const createTableSql = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100)
        )`;
    db.query(createTableSql, (err, result) => {
        if (err) throw err;
        console.log("Table checked/created.");
    });
});

// API routes
app.get('/users', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/users', (req, res) => {
    const data = { name: req.body.name, email: req.body.email };
    const sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send('User added');
    });
});

app.put('/users/:id', (req, res) => {
    const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
    const data = [req.body.name, req.body.email, req.params.id];
    db.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send('User updated');
    });
});

app.delete('/users/:id', (req, res) => {
    const sql = `DELETE FROM users WHERE id = ?`;
    const data = [req.params.id];
    db.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send('User deleted');
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
