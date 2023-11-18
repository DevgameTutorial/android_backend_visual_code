//POSTGRESQL
require('dotenv').config();
const Pool = require("pg").Pool;
const connection = new Pool({
  user: process.env.PG_DB_USER,
  host: process.env.PG_DB_HOST,
  database: process.env.PG_DB_NAME,
  password: process.env.PG_DB_PASSWORD,
  port: process.env.PG_PORT,
  max: process.env.PG_MAX, 
  idleTimeoutMillis: process.env.PG_IDLE_TIMEOUT
});

module.exports = connection;
connection.on('error', function (error, client) {
    console.error('idle client error', error.message, error.stack);
});

//MYSQL
// var mysql = require('mysql');
// require('dotenv').config();
// var connection = mysql.createConnection({
// 	host     : process.env.MYSQL_DB_HOST,
// 	user     : process.env.MYSQL_DB_USER,
// 	password : process.env.MYSQL_DB_PASSWORD,
// 	database : process.env.MYSQL_DB_NAME
// });
// module.exports = connection;
