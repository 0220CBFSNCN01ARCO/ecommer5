var express = require("express");
var router = express.Router();
const multer = require("multer");
let editMiddleware = require("../middleware/editMiddleware");

const path = require('path');
const storage = multer.diskStorage({
    destination: path.resolve (__dirname, '../public/essence/img/product-img' ),
    filename: (req, file, cb) => {
        cb(null, 'libro' + "-" + Date.now() + path.extname(file.originalname));
    }}
);
const upload = multer({storage: storage});

const adminController = require("../controllers/adminController");
let { check, validationResult, body } = require("express-validator");
let fs = require("fs");

router.get("/create", //editMiddleware.validationAdmin, 
adminController.adminProducts);

router.post("/create", //editMiddleware.validationAdmin, 
upload.any(),
  [
    check("titulo").isLength({ min: 4 }).withMessage("Falta el título del libro"),
    check("autor").isLength({min: 4 }).withMessage("Falta aclarar el autor"),
    check("precio").isInt().withMessage("El producto no tiene precio"),
    check("stock").isInt().withMessage("Falta aclarar el stock"),
    check("descripcion").isLength({ min: 10 }).withMessage("Falta la descripción del libro")
  ],  adminController.create);

router.get("/edit", //editMiddleware.validationAdmin, 
adminController.edit);

router.get("/edit/:idlibros", //editMiddleware.validationAdmin, 
adminController.select);

router.put("/edit/:idlibros", upload.any(),// editMiddleware.validationAdmin, 
adminController.update);

router.delete("/delete/:idlibros",  //editMiddleware.validationAdmin, 
adminController.delete);

module.exports = router;
