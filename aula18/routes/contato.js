const express = require("express");
const router = express.Router();
const ContatoController = require("../controllers/ContatoController");

router.post('/registrar', ContatoController.registrar);
router.get('/listar', ContatoController.listar);

module.exports = router;