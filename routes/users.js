const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController");
let logDBMiddleware = require("../middleware/logDBMiddleware");
let { check, validationResult, body } = require("express-validator");
let fs = requiere("fs");

router.get("/register", registroController.register);
router.post(
  "/register",
  logDBMiddleware,
  [
    check("nombre").isLength().whitMessage("Este campo debe estar completo"),
    check("prov").isLength().whitMessage("Te falto la provincia"),
    check("localidad").isLength().whitMessage("Te falto la localidad"),
    check("direccion").isLength().whitMessage("Y la dirección?"),
    check("cp").isLength().whitMessage("Sin codigo postal no te encuentro"),
    check("numero").isLength().whitMessage("Sin número no te encuento"),
    check("email").isEmail().whitMessage("El email debe ser uno valido"),
    check("contraseña")
      .isLength({ min: 8 })
      .whitMessage("Hasta 8 caracteres podes poner"),
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
    }).whitMessage('Usuario ya existente')
  ],
  registroController.create
);

module.exports = router;
