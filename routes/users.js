const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController");
let logDBMiddleware = require("../middleware/logDBMiddleware");
let { check, validationResult, body } = require("express-validator");
let fs = require("fs");

router.get("/", registroController.register);
router.post(
  "/",
  logDBMiddleware,
  [
    check("nombre").isLength().withMessage("Este campo debe estar completo"),
    check("prov").isLength().withMessage("Te falto la provincia"),
    check("localidad").isLength().withMessage("Te falto la localidad"),
    check("direccion").isLength().withMessage("Y la dirección?"),
    check("cp").isLength().withMessage("Sin codigo postal no te encuentro"),
    check("numero").isLength().withMessage("Sin número no te encuento"),
    check("email").isEmail().withMessage("El email debe ser uno valido"),
    check("contraseña")
      .isLength({ min: 8 })
      .withMessage("Hasta 8 caracteres podes poner"),
    body("email").custom(function (value) {
      let users;
      if (userJSON == "") {
        users = [];
      } else {
        users = JSON.parse(userJSON);
      }

      for (let i = 0; i < users.length; i++) {
        if (user[i].email == value) return false;
      }
      return true;
    }).withMessage('Usuario ya existente')
  ],
  registroController.create
);

module.exports = router;
