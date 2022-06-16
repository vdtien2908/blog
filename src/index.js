const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 8080;

const route = require("./routes");

// Static File
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Parse application
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/Json
app.use(bodyParser.json());

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
