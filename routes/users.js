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
//let validationuser = require("../middleware/validationuser")
let adminMiddleware = require("../middleware/admin");
let { check, validationResult, body } = require("express-validator");
let fs = require("fs");


router.get("/register", guestMiddleware, usersController.register);

router.post("/register", upload.any(), [
    check("nombre").isLength({min: 4}).withMessage("Me falta tu nombre y apellido"),
    check("provincia").isLength().withMessage("Te faltó la provincia"),
    check("localidad").isLength({min: 4}).withMessage("Te faltó la localidad"),
    check("direccion").isLength({min: 5}).withMessage("Y la dirección?"),
    check("cp").isInt({min: 4}).withMessage("Sin codigo postal no te encuentro"),
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


router.get("/login", usersController.login);

router.post("/login", adminMiddleware.verifyAdmin, [
  check("email").isEmail().withMessage("Email inválido"),
 check("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
], usersController.processLogin); 

router.get('/check', function(req, res) {
  if (req.session.usarioLogueado == undefined) {
    res.send("No estás logueado");
  } else {
    res.send("El usuario logueado es " + req.session.usarioLogueado.email);
  }
})

router.get('/account', //authMiddleware, 
usersController.account)

router.get('/logout', usersController.logout)

module.exports = router;
