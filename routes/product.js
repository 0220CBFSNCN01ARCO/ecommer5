const express = require('express');
const router = express.Router();

const productosController = require("../controllers/productosController.js");

router.get("/", productosController.listado);

router.get("/detail/:idlibros", productosController.detail);

router.get("/categoria/:idcategorias", productosController.category);

router.get("/search/:titulo", productosController.search);

router.get("/search/:titulo", productosController.search);

router.get("/orderBy", productosController.orderBy);

router.get("/priceBetween/:idprecio", productosController.priceBetween);


module.exports = router;