const express = require('express')
const router = express.Router()

const myController = require('../app/controller/MyController.js')

router.patch ('/trash/restore/coures/:id',myController.restoreTrashCourses);

router.get ('/trash/coures',myController.myTrashCourses);

router.get ('/courses',myController.myCourses);

module.exports = router;