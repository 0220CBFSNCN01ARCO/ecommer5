const express = require('express');
const router = express.Router();
const multer = require("multer");
let path = require("path");
var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "tmp/my-uploads")
  } ,
  filename: function(req, file, cb){
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
  }
});
var upload = multer({storage: storage});
const productosController = require("../controllers/productosController.js");

router.get("/", productosController.listado);
router.get("/:idProduct", productosController.detalle);
router.get("/create", productosController.create);
router.post("/create", upload.any(), productosController.agregar);
router.get("/:idProduct/edit", productosController.update);
router.put("/:idProduct/edit", productosController.update);
router.delete("/:idProduct/delete", productosController.delete);

module.exports = router;