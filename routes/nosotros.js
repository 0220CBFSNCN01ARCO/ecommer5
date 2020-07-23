var express = require('express');
var router = express.Router();
const nosotrosController = require("../controllers/nosotrosController");

/* GET home page. */
router.get('/', nosotrosController.nosotros);

module.exports = router;