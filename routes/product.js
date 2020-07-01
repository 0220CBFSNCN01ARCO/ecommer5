const express = require('express');
const router = express.Router();
const multer = require("multer");
let path = require("path");
let authMiddleware = require("../middleware/authMiddleware");
let { check, validationResult, body } = require("express-validator");
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
router.get("/detail/:id", productosController.detail);
router.get("/create", productosController.create);

router.post("/create", upload.any(),[
    check("titulo").isLength({min: 4}).withMessage("Falta el título del libro"),
    check("autor").isLength().withMessage("Falta aclarar el autor"),
    check("precio").isInt().withMessage("El producto no tiene precio"),
    check("stock").isInt().withMessage("Falta aclarar el stock")
], productosController.agregar);

router.get("/edit/:id", productosController.edit);
router.post("/edit/:id", productosController.update);
router.delete("/delete/:id", productosController.delete);

module.exports = router;