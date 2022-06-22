const express = require("express");
const router = express.Router();
const ApiController = require("../app/controllers/ApiController");
router.get("/v1/phone", ApiController.viewAll);
router.get("/v1/phone/:id", ApiController.find);
router.post("/v1/phone/create", ApiController.create);
router.put("/v1/phone/update/:id", ApiController.update);
router.delete("/v1/phone/delete/:id", ApiController.delete);

module.exports = router;
