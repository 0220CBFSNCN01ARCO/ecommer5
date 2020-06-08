const express = require('express');
const router = express.Router();
const productosController = require("../controllers/productosController.js");

router.get("/", productosController.listado);
router.get("/:idProduct", productosController.detalle);
router.get("/create", productosController.create);
router.get("/:idProduct/edit", productosController.update);
router.put("/:idProduct/edit", productosController.update);
router.delete("/:idProduct/delete", productosController.delete);

module.exports = router;