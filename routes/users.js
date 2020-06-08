const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController")

router.get('/users', registroController.register);
router.post('/users', registroController.register);

module.exports = router;