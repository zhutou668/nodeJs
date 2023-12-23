const Course = require('../models/Course.js')
const { mutipleMongooseArray } = require('../../util/mongoosefix.js')

class SiteController {
	
	
	home (req, res) {
		Course.find({})
		.then(courses => res.render('home',{
			courses: mutipleMongooseArray(courses)
		}))
	}
	
}


module.exports = new SiteController();
