var express = require("express");
var router = express.Router();
const multer = require("multer");

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

//router.get('/', adminController.adminProducts);
router.get("/create", adminController.adminProducts);

router.post("/create", upload.any(),
  [
    check("titulo")
      .isLength({ min: 4 })
      .withMessage("Falta el título del libro"),
    check("autor").isLength().withMessage("Falta aclarar el autor"),
    check("precio").isInt().withMessage("El producto no tiene precio"),
    check("stock").isInt().withMessage("Falta aclarar el stock"),
  ],
  adminController.create);

router.get("/edit", adminController.edit)
router.post("/edit/:id", adminController.update);
router.delete("/delete/:id", adminController.delete);

module.exports = router;
