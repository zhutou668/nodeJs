const Course = require('../models/Course.js')
const { mutipleMongooseArray } = require('../../util/mongoosefix.js')

class MyController {
	
	//[GET] /my/courses
	myCourses (req, res, next) {
		Course.find({})
		.then(courses => res.render('course/myCourses',{
			courses: mutipleMongooseArray(courses)
		}))
		.catch(next)
	}
}


module.exports = new MyController();
