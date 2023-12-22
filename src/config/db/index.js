const mongoose = require('mongoose')
const DBURL = 'mongodb://127.0.0.1:27017/node_blog_dev'
async function connect() {
    try {
        await mongoose.connect(DBURL);
        console.log('connect succesfully');
    } catch (error) {
        console.log(error);
    }
}


module.exports = { connect }
