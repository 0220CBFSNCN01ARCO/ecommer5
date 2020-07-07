var express = require('express');
var router = express.Router();
const shippingController = require("../controllers/shippingController");

/* GET home page. */
router.get('/', shippingController.shipping);

module.exports = router;