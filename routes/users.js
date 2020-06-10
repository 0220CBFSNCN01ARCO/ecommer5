const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController")
let logDBMiddleware = require('../middleware/logDBMiddleware');
let { check, validationResult, body } = require('express-validator');

router.get('/register', registroController.register);
router.post('/register', logDBMiddleware, [
    check('nombre').isLength(),
    check('prov').isLength(),
    check('localidad').isLength(),
    check('direccion').isLength(),
    check('cp').isLength(),
    check('numero').isLength(),
    check('email').isEmail(),
    check('contraseña').isLength({min: 8})
] ,registroController.create);

module.exports = router;