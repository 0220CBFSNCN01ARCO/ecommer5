const express = require("express");
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

const usersController = require("../controllers/usersController");
let logDBMiddleware = require("../middleware/logDBMiddleware"); 
let guestMiddleware = require("../middleware/guestMiddleware");
let { check, validationResult, body } = require("express-validator");
let fs = require("fs");


router.get("/register", guestMiddleware, usersController.register);

router.post("/register", upload.any(), logDBMiddleware, guestMiddleware, [
    check("nombre").isLength({min: 4}).withMessage("Me falta tu nombre y apellido"),
    check("prov").isLength().withMessage("Te faltó la provincia"),
    check("localidad").isLength().withMessage("Te faltó la localidad"),
    check("direccion").isLength().withMessage("Y la dirección?"),
    check("cp").isInt({min: 0}).withMessage("Sin codigo postal no te encuentro"),
    check("numero").isInt({min: 0}).withMessage("Sin número no te encuento"),
    check("email").isEmail().withMessage("Falta tu email"),
    body("email").custom(function (value){
     let usersJSON = fs.readFileSync("./data/users.json", {encoding: "utf-8"});
  
     let users;
     if (usersJSON == "") {
       users = [];
      } else {
       users = JSON.parse(usersJSON);
      }

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == value) {
          return false;
      } 
    }
      return true;
    }).withMessage("Usuario ya existente"),
    check("password").isLength({ min: 8 }).withMessage("La contraseña debe tener 8 caracteres como mínimo") 

  ], usersController.create);


router.get("/login", usersController.login);

router.post("/login", [
  check("email").isEmail().withMessage("Email inválido"),
  check("password").isLength({min: 1}).withMessage("La contraseña debe tener al menos 8 caracteres")
], usersController.processLogin);  

router.get('/check', function(req, res) {
  if (req.session.usarioLogueado == undefined) {
    res.send("No estás logueado");
  } else {
    res.send("El usuario logueado es " + req.session.usarioLogueado.email);
  }
})

module.exports = router;
