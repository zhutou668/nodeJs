const express = require('express')
const router = express.Router()

const searchController = require('../appcontroller/SearchController.js')

router.use('/',searchController.index)


module.exports = router