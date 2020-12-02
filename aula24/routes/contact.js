const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/ContactController");

router.get('/listar', ContactController.list);
router.post('/registrar', ContactController.create);

router.get('/alterar/:id', ContactController.edit);
router.post('/alterar/:id', ContactController.update);

router.get('/excluir/:id', ContactController.delete);

module.exports = router;