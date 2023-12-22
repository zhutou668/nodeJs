const Course = require('./models/Course.js');

class SiteController {
	
	
	// home (req, res) {
	// 	res.render('home')
	// }
	
	
    async home (req, res) {
        try {
            const courses = await Course.find({});
            console.log('Courses:', courses); // Thêm dòng này để xem liệu courses có dữ liệu không.
            res.json(courses);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
	
	
}


module.exports = new SiteController();
