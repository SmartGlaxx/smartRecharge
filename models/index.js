const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	_id : mongoose.Schema.Types.ObjectId,
	name : {type : String, required : true},
	email : {type : String, required : true},
	password : {type : String, required: true, minLength : 8},
	phone : {type : Number, required : true}
})

const User = mongoose.model('User', UserSchema)
module.exports = User