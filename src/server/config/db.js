const mysql = require('mysql')

const db = mysql.createConnection({
host: "sql4.freesqldatabase.com",
user: "sql4490693",
password: "yLQM6Gg7df",
database:"sql4490693" 
})

module.exports = db;