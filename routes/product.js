const express = require('express');
const router = express.Router();

const productosController = require("../controllers/productosController.js");

router.get("/", productosController.listado);
router.get("/detail/:idlibros", productosController.detail);
router.get("/categoria/:idcategoria", productosController.category);


module.exports = router;