// Connection database
const express = require("express");
const pool = require("../../config/db");

class SiteController {
  render(req, res) {
    let sql = "select * from dienthoai where status = 'active' ";
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection
        .promise()
        .query(sql)
        .then(([rows, field]) => {
          res.render("home", { rows });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}

module.exports = new SiteController();
