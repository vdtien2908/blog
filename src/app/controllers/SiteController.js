// Connection database
const connection = require("../../config/db");
class SiteController {
  // [GET] /
  home(req, res) {
    {
      dataTest: "123";
    }
    let data = [];
    connection.query(
      "SELECT * FROM `dienthoai`",
      function (err, results, fields) {
        console.log(results);
        data = results.map(function (row) {
          return row;
        });
      }
    );
    console.log(data);
    res.render("home", { dataPhone: 123, dataTest: "abc" });
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
