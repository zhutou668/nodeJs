class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    showdetails(req, res) {
        res.send('This is details page');
    }
}

module.exports = new NewsController();
