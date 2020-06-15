const express = require("express");
const router = express.Router();
let fs = require("fs");
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

const listadoUsers = JSON.parse(fs.readFileSync("./data/users.json", 'utf-8'));
const usersController = require("../controllers/usersController");
let logDBMiddleware = require("../middleware/logDBMiddleware"); 
let guestMiddleware = require("../middleware/guestMiddleware");
let { check, validationResult, body } = require("express-validator");


router.get("/register", guestMiddleware, usersController.register);

router.post(
  "/register", upload.any(),
 logDBMiddleware,
  [
    check("nombre").isLength().withMessage("Este campo debe estar completo"),
    check("prov").isLength().withMessage("Te falto la provincia"),
    check("localidad").isLength().withMessage("Te falto la localidad"),
    check("direccion").isLength().withMessage("Y la dirección?"),
    check("cp").isLength().withMessage("Sin codigo postal no te encuentro"),
    check("numero").isLength().withMessage("Sin número no te encuento"),
    check("email").isEmail().custom(function (value) {
     let listadoUsers = fs.readFileSync("users.json", {encoding: "utf-8"});
     console.log(listadoUsers)
     let users;
     if (listadoUsers == "") {
       users = [];
      } else {
       users = JSON.parse(listadoUsers);
      }

      for (let i = 0; i < users.length; i++) {
        if (users[i].email == value) return false;
      }
      return true;
    }).withMessage("Usuario ya existente"),
    check("contraseña")
      .isLength({ min: 8 })
      .withMessage("Hasta 8 caracteres podés poner") 
  
  ], 
  usersController.create);

router.get("/login", usersController.login);

//router.post("/login", usersController.count);

router.post("/login", [
  check('email').isEmail().withMessage("Email invalido"),
  check('contraseña').isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
], usersController.processLogin);  

module.exports = router;
