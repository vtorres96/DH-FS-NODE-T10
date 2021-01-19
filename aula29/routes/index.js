var express = require('express');
var router = express.Router();
const CardController = require("../controllers/CardController");
/* GET home page. */
router.get('/', CardController.index);

module.exports = router;