var express = require("express");
var router = express.Router();
var usuariosAPIController = require("../../controllers/api/usuariosController")

router.get("/", usuariosAPIController.list);
module.exports = router;
