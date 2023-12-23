const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController.js');

router.get('/', siteController.home);

module.exports = router;
