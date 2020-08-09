const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../database/models")

const path = require('path');
const storage = multer.diskStorage({
    destination: path.resolve (__dirname, '../public/essence/img/users-img' ),
    filename: (req, file, cb) => {
        cb(null, 'user' + "-" + Date.now() + path.extname(file.originalname));
    }}
);
const upload = multer({storage: storage});


const usersController = require("../controllers/usersController");
let guestMiddleware = require("../middleware/guestMiddleware");
let authMiddleware = require("../middleware/authMiddleware");
let redirectToProfileIfAuthenticated = require('../middleware/redirectToProfileIfAuthenticated')
//let validationuser = require("../middleware/validationuser")
let adminMiddleware = require("../middleware/admin");
let { check, validationResult, body } = require("express-validator");
let fs = require("fs");


router.get("/register", guestMiddleware, usersController.register);

router.post("/register", upload.any(), [
    check("nombre").isLength({min: 4}).withMessage("Tenés que completar tu nombre y apellido"),
    check("provincia").isLength().withMessage("Te faltó la provincia"),
    check("localidad").isLength({min: 4}).withMessage("Te faltó la localidad"),
    check("direccion").isLength({min: 5}).withMessage("Tenés que completar tu dirección"),
    check("cp").isInt({min: 4}).withMessage("Falta tu código postal"),
    check("email").isEmail()
    // VALIDACIÓN CUSTOM, PARA CHEQUEAR EN BASE DE DATOS
    /*
    .custom(async value => {
      let existentUser = await ModeloUsuario.findOne({ 'email': value });
      if (existentUser !== null) {
        console.log('User Exists');
        return Promise.reject();
      }})
      */
      .withMessage("Falta tu email"),
    check("password").isLength({min: 8}).withMessage("La contraseña debe tener 8 caracteres como mínimo") 

  ], usersController.create);


router.get("/login", redirectToProfileIfAuthenticated, usersController.login);

router.post("/login", //adminMiddleware.verifyAdmin, 
[
   check("email").isEmail().withMessage("Email inválido"),
 check("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
], usersController.processLogin); 


router.get('/account', authMiddleware, upload.any(), usersController.account);

router.get('/update/:idusuario', authMiddleware, usersController.update);

router.put('/update/:idusuario', authMiddleware, upload.any(), [
  check("nombre").isLength({min: 4}).withMessage("Me falta tu nombre y apellido"),
  check("provincia").isLength().withMessage("Te faltó la provincia"),
  check("localidad").isLength({min: 4}).withMessage("Te faltó la localidad"),
  check("direccion").isLength({min: 5}).withMessage("No completaste tu dirección"),
  check("cp").isInt({min: 4}).withMessage("Falta el código postal de tu domicilio"),
  check("email").isEmail().withMessage("Falta tu email"),
  check("password").isLength({min: 8}).withMessage("La contraseña debe tener 8 caracteres como mínimo") 

], usersController.chargeUpdate);

router.get('/logout', usersController.logout);

router.get("/success", usersController.success);



module.exports = router;
