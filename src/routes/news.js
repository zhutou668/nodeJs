const express = require('express')
const router = express.Router()

const newsController = require('../appcontroller/NewsController.js')

router.use('/:slug',newsController.showdetails)

router.use('/',newsController.index)


module.exports = router