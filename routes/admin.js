var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, "tmp/my-uploads")
    } ,
    filename: function(req, file, cb){
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
  });
  var upload = multer({storage: storage});


  /*let adminMiddleware = require("../middleware/admin");
  let { check, validationResult, body } = require("express-validator");
let fs = require("fs");*/
//HAY QUE HACER LA LOGICA DEL MD PARA ADMIN



//router.get('/', adminController.create);
router.get('/create', adminController.adminProducts);

router.post('/create', upload.any(), [
    check("titulo").isLength({min: 4}).withMessage("Falta el título del libro"),
    check("autor").isLength().withMessage("Falta aclarar el autor"),
    check("precio").isInt().withMessage("El producto no tiene precio"),
    check("stock").isInt().withMessage("Falta aclarar el stock")
], adminController.agregar);

router.get('/edit/:id', adminController.edit);
router.post('/edit/:id', adminController.update);
router.delete('/delete/:id',adminController.delete);


module.exports = router;