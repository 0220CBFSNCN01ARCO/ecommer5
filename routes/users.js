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
//let validationusers = require("../middleware/validationuser")
let adminMiddleware = require("../middleware/admin");
let { check, validationResult, body } = require("express-validator");
let fs = require("fs");


router.get("/register", guestMiddleware, usersController.register);

router.post("/register", upload.any(), [
    check("nombre").isLength({min: 4}).withMessage("Me falta tu nombre y apellido"),
    check("provincia").isLength({min: 4}).withMessage("Te faltó la provincia"),
    check("localidad").isLength({min: 1}).withMessage("Te faltó la localidad"),
    check("direccion").isLength({min: 1}).withMessage("Y la dirección?"),
    check("cp").isInt({min: 0}).withMessage("Sin codigo postal no te encuentro"),
    check("email").isEmail().withMessage("Falta tu email"),
   // body("email").custom(function (value){
   //  db.Usuario.findOne({
    //   where: {
    //     email : value
    //   }
    // })
    // .then(function(usuario){
    //   if(usuario == null || usuario == undefined){
//return false
     //  } else {
     //    return true
     //  }
    // })
  //  }
   // ).withMessage("Usuario ya existente"),
    check("password").isLength({min: 8}).withMessage("La contraseña debe tener 8 caracteres como mínimo") 

  ], usersController.create);


router.get("/login", usersController.login);

router.post("/login", /*validationusers*/ adminMiddleware.verifyAdmin, [
  check("email").isEmail().withMessage("Email inválido"),
  check("password").isLength({min: 1}).withMessage("La contraseña debe tener al menos 8 caracteres")//,
 // body("email").custom(function(value){
  //  let usuariosJSON = fs.readFileSync('./data/users.json', {encoding:'utf-8'});
   // let users;
 //   if(usuariosJSON == ""){
    //  users = [];
   // }else{
   //   users = JSON.parse(usuariosJSON);
   // }
  //  for(let i = 0;i< users.length ;i++){
  //    if(users[i].email == value){
    //    return true;
   //  }
   // }
   // return false;
 //}).withMessage("No tenemos registrado tu email")
], usersController.processLogin);  

router.get('/check', function(req, res) {
  if (req.session.usarioLogueado == undefined) {
    res.send("No estás logueado");
  } else {
    res.send("El usuario logueado es " + req.session.usarioLogueado.email);
  }
})

router.get('/account', authMiddleware, usersController.account)

router.get('/logout', usersController.logout)

module.exports = router;
