const express = require('express');
const mysql = require('mysql');
require('dotenv').config()
const app = express();
const port = 3000;

// Object to connect Node to MySQL
const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT
});

// Connecting to MySQL
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // Creating database if not exist
    const createDatabaseQuery = "CREATE DATABASE IF NOT EXISTS todo";
    con.query(createDatabaseQuery, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
    // Using created database
    const useDatabase = "USE todo";
    con.query(useDatabase, function (err, result) {
        if (err) throw err;
        console.log("Using database");
    });
});

// Accepting GET request at "/"
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Listening for requests on port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});