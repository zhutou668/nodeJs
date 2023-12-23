const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/NewsController.js');

router.get('/:slug', newsController.showdetails);

router.get('/', newsController.index);

module.exports = router;
