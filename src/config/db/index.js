const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cuahangdienthoai",
});

// // simple query
// connection.query("SELECT * FROM `dienthoai`", function (err, results, fields) {
//   console.log("<<<check mysql >>>");
//   console.log(results[0].id_phone);
// });

module.exports = connection;
