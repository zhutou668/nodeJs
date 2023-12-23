module.exports = {
	mutipleMongooseArray: function (mongooseArray) {
		return mongooseArray.map(mongoose => mongoose.toObject());
	},
	
	mongooseObject: function (mongooses) {
		return mongooses ? mongooses.toObject() : mongooses
	}
}