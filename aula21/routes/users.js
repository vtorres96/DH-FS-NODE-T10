var express = require('express');
var router = express.Router();
const UserController = require("../controllers/UserController");

router.get('/registrar', UserController.create);

module.exports = router;
