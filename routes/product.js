const express = require('express');
const router = express.Router();

const productosController = require("../controllers/productosController.js");

router.get("/", productosController.listado);
router.get("/detail/:id", productosController.detail);


module.exports = router;