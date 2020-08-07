const express = require('express');
const router = express.Router();

const productosController = require("../controllers/productosController.js");

router.get("/", productosController.listado);

router.get("/detail/:idlibros", productosController.detail);

router.get("/categoria/:idcategorias", productosController.category);

router.post("/search/:titulo", productosController.search);

router.get("/orderBy", productosController.orderBy);

router.get("/priceBetween/1", productosController.priceBetween1);
router.get("/priceBetween/2", productosController.priceBetween2);
router.get("/priceBetween/3", productosController.priceBetween3);

module.exports = router;