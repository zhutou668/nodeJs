const express = require('express')
const router = express.Router()

const coursesController = require('../app/controller/CourseController.js')

router.post ('/store',coursesController.store);

router.put ('/update/:id',coursesController.update);

router.get ('/edit/:id',coursesController.editCourse);

router.delete ('/delete/:id',coursesController.delete);

router.delete ('/force/delete/:id',coursesController.forceDelete);

router.get ('/create',coursesController.create);

router.get ('/:slug',coursesController.courses);

module.exports = router;