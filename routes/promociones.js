var express = require('express');
var router = express.Router();
const promocionesController = require("../controllers/promocionesController");

/* GET home page. */
router.get('/', promocionesController.promociones);

module.exports = router;