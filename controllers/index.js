const User = require('../models')
const mongoose = require('mongoose')


const getSignUp = (req, res, next)=>{
	const newUser = new User({
		_id : mongoose.Types.ObjectId(),
		name : 'req.body.name',
		email : 'req.body.email',
		password : 'req.body.password',
		phone : 234
	})
	newUser.save()
	.then(item =>{
		res.status(200).json({
			msg : "savfeged"
		})
	}).catch(error =>console.log(error))
}

module.exports = getSignUp