const express = require('express')
const router = express.Router()

const myController = require('../app/controller/MyController.js')

router.get ('/courses',myController.myCourses);

module.exports = router;