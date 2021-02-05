const express = require('express');
const router = express.Router();

const PhotoController = require('../controllers/PhotoController');

router.get('/', PhotoController.index);

module.exports = router;