const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')



const Course = new Schema({
  name: String,
  description: String, 
  img: String,
  price: String,
  videoId: String,
  slug: {type: String , slug: "name" , unique: true },
},{ timestamps: true});
// 

mongoose.plugin(slug)

Course.plugin(mongooseDelete,{
	overrideMethods: true,
	deletedAt:true
	})

module.exports = mongoose.model('Course', Course,'Courses');