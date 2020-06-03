const express = require('express');
const router = express.Router();
const productosController = require("../controllers/productosController.js");

router.get("/", productosController.listado);
router.post("/", productosController.alta);
router.get("/:idProducto", productosController.detalle);
router.get("/create", productosController.agregar);
router.get("/:idProducto/edit", productosController.modificacion);
router.put("/:idProducto", productosController.modificacion);
router.delete("/:idProducto", productosController.baja);    

module.exports = router;