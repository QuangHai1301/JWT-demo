const mysql = require("mysql");

const connection = mysql.createConnection({
  host:"localhost",
  port:3307,
  user:"root",
  database:"data_test",
  password:"",
});

connection.connect();
module.exports = connection;