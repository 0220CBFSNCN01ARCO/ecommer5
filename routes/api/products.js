var express = require("express");
var router = express.Router();
var productosAPIController = require("../../controllers/api/productosController")

router.get("/", productosAPIController.list);
router.get("/:idlibros", productosAPIController.find);

module.exports = router;