const Course = require('../models/Course.js')
const { mutipleMongooseArray } = require('../../util/mongoosefix.js')

class MyController {
	
	//[GET] /my/courses
	
	myTrashCourses(req, res, next) {
	  Course.findDeleted({})
		.then(deletedCourses => {
		  res.render('course/trash', {
			deletedCourses: mutipleMongooseArray(deletedCourses)
		  });
		})
		.catch(next);
	}
	
	myCourses (req, res, next) {
		Course.find({})
		.then(courses => res.render('course/myCourses',{
			courses: mutipleMongooseArray(courses)
		}))
		.catch(next)
	}
	
	restoreTrashCourses (req, res, next) {
		Course.restore({_id: req.params.id})
		.then(()=> res.redirect('back'))
		.catch(next)
	}
}


module.exports = new MyController();
