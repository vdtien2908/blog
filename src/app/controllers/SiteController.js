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
          res.render("addPhone", { alerts: "successful add product." });
        } else {
          console.log(err);
        }
      }
    );
  }

  // [POST] /editPhone/:id
  edit(req, res) {
    connection.query(
      "SELECT * FROM dienthoai where id = ?",
      [req.params.id],
      function (err, rows) {
        if (!err) {
          console.log("Database connection");
          res.render("editPhone", { rows });
        } else {
          console.log(err);
        }
      }
    );
  }

  // [POST] /editPhone/:id
  update(req, res) {
    const { name_phone, price_phone, description } = req.body;
    connection.query(
      "UPDATE dienthoai SET name_phone = ?, price_phone = ?, description = ? where id = ?",
      [name_phone, price_phone, description, req.params.id],
      function (err, rows) {
        if (!err) {
          connection.query(
            "SELECT * FROM dienthoai where id = ?",
            [req.params.id],
            function (err, rows) {
              if (!err) {
                console.log("Database connection");
                res.render("editPhone", {
                  rows,
                  alert: `${name_phone} successful update. `,
                });
              } else {
                console.log(err);
              }
            }
          );
        } else {
          console.log(err);
        }
      }
    );
  }

  // [GET] /:id
  delete(req, res) {
    connection.query(
      "DELETE FROM dienthoai WHERE id = ?",
      [req.params.id],
      function (err, rows) {
        if (!err) {
          console.log("Database connection");
          res.redirect("/");
        } else {
          console.log(err);
        }
      }
    );
  }

  // [GET]
  view(req, res) {
    // user the connection
    connection.query(
      "SELECT * FROM dienthoai where id =  ?",
      [req.params.id],
      function (err, rows) {
        if (!err) {
          res.render("viewProduct", { rows: rows });
        } else {
          console.log(err);
        }
      }
    );
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
