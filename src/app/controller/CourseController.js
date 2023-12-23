
const Course = require('../models/Course.js')
const { mongooseObject } = require('../../util/mongoosefix.js')


class CoursesController {
	courses (req, res, next) {
		Course.findOne({slug: req.params.slug})
		.then(course => {
			res.render('course/showcourse',{
				course: mongooseObject(course)
			})
		})
		.catch(next)
	}
	
	//[GET] course/create
	create (req, res, next) {
		res.render('course/create')
	}
	
	//[POST] course/store
	store (req, res, next) {
		const formData = req.body
		formData.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
		const course = new Course(formData)
		course.save()
		 .then(()=> {
			 res.redirect('/')
		 })
		 .catch(err => {
			 
		 })
	}
		
}

module.exports = new CoursesController()