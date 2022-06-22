const siteRoute = require("./site");
const api = require("./api");

function route(app) {
  app.use("/api", api);
  app.use("/", siteRoute);
}

module.exports = route;
