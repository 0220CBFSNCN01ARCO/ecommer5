const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController")

router.get('/', registroController.register);
router.post('/', registroController.create);

module.exports = router;