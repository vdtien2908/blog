const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);
router.post("/", siteController.find);
router.get("/addPhone", siteController.form);
router.post("/addPhone", siteController.create);
router.get("/", siteController.home);

module.exports = router;
