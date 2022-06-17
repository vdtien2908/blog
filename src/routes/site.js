const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.post("/", siteController.find);
router.get("/search", siteController.search);
router.post("/addPhone", siteController.create);
router.get("/addPhone", siteController.form);
router.get("/editPhone/:id", siteController.edit);
router.post("/editPhone/:id", siteController.update);
router.get("/viewProduct/:id", siteController.view);
router.get("/:id", siteController.delete);
router.get("/", siteController.home);

module.exports = router;
