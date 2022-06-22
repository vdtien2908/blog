const connection = require("../../config/db");

class ApiController {
  viewAll(req, res) {
    connection.query(
      "SELECT * FROM dienthoai WHERE status = 'active'",
      function (err, rows) {
        return res.status(200).json({
          message: "OK",
          data: rows,
        });
      }
    );
  }

  find(req, res) {
    let id = req.params.id;
    // user the connection
    connection.query(
      "SELECT * FROM dienthoai where id like ? and status = 'active'",
      [id],
      function (err, rows) {
        if (!err) {
          res.status(200).json({
            message: "OK",
            data: rows,
          });
        } else {
          console.log(err);
        }
      }
    );
  }

  create(req, res) {
    const { name_phone, price_phone, description } = req.body;
    if (!name_phone || !price_phone || !description) {
      res.status(200).json({
        message: "missing require params",
      });
    }
    connection.query(
      "INSERT INTO dienthoai SET name_phone = ?, price_phone = ?, description =?",
      [name_phone, price_phone, description],
      function (err, rows) {
        if (!err) {
          res.status(200).json({
            message: "OK",
          });
        } else {
          console.log(err);
        }
      }
    );
  }

  update(req, res) {
    const { name_phone, price_phone, description } = req.body;
    if (!name_phone || !price_phone || !description) {
      res.status(200).json({
        message: "missing require params",
      });
    }
    connection.query(
      "UPDATE dienthoai SET name_phone = ?, price_phone = ?, description = ? where id = ?",
      [name_phone, price_phone, description, req.params.id],
      function (err, rows) {
        if (!err) {
          res.status(200).json({
            message: "OK",
          });
        } else {
          res.status(404).json({
            message: err,
          });
        }
      }
    );
  }

  // [GET] /:id
  delete(req, res) {
    connection.query(
      "UPDATE dienthoai SET status = 'remove' WHERE id = ?",
      [req.params.id],
      function (err, rows) {
        if (!err) {
          res.status(200).json({
            message: "OK",
          });
        } else {
          res.status(404).json({
            message: err,
          });
        }
      }
    );
  }
}

module.exports = new ApiController();
