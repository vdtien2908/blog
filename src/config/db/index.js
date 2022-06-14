const mysql = require("mysql");

function connect() {
  try {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "cuahangdienthoai",
    });
    // console.log("connection database successful");
  } catch (error) {
    console.log("connection failed");
  }
}

module.exports = { connect };
