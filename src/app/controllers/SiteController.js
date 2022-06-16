// Connection database
const connection = require("../../config/db");

class SiteController {
  // [GET] /
  home(req, res) {
    // user the connection
    connection.query("SELECT * FROM dienthoai", function (err, rows) {
      if (!err) {
        console.log("Database connection");
        res.render("home", { rows: rows });
      } else {
        console.log(err);
      }
    });
  }

  // [PORT]
  find(req, res) {
    let SearchTerm = req.body.search;
    // user the connection
    connection.query(
      "SELECT * FROM dienthoai where name_phone like ?",
      ["%" + SearchTerm + "%"],
      function (err, rows) {
        if (!err) {
          res.render("home", { rows: rows });
        } else {
          console.log(err);
        }
      }
    );
  }

  // [POST]
  form(req, res) {
    res.render("addPhone");
  }

  // [POST] /addUser
  create(req, res) {
    const { name_phone, price_phone, description } = req.body;
    // res.render("addPhone");
    connection.query(
      "INSERT INTO dienthoai SET name_phone = ?, price_phone = ?, description =?",
      [name_phone, price_phone, description],
      function (err, rows) {
        if (!err) {
          res.render("addPhone");
        } else {
          console.log(err);
        }
        console.log("Table: " + rows);
      }
    );
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
