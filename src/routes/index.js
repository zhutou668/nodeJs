const newsRouter = require('./news.js');
const searchRouter = require('./search.js');
const siteRouter = require('./site.js');
const coursesRouter = require('./course.js')

function route(app) {
    app.use('/news', newsRouter);
	
	app.use('/course', coursesRouter);

    app.use('/search', searchRouter);

    app.use('/', siteRouter);

    app.post('/search', (req, res) => {
        res.render('search');
        console.log(req.body);
        console.log(req.hostname);
        // res.send('123')
    });
}

module.exports = route;
