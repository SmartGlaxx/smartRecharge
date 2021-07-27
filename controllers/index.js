const User = require('../models')
const mongoose = require('mongoose')


const getUsers = (req, res, next)=>{
	User.find()
	.exec()
	.then(results =>{
		res.status(200).json({
			count : results.length,
			message : "Data recieved",
			data : results.map(result =>{
				return {
					_id : result._id,
					name : result.name,
					email : result.email,
					password  : result.password,
					phone : result.phone
				}
			})
		})
	}).catch(error =>{
		res.status(500).json({
			error : {
				message : "An error occured."
			}
		})
	})

}

const getOneUser = (req, res)=>{
	const {userId} = req.params

	User.findOne({_id : userId})
	.exec()
	.then(result =>{
		res.status(200).json({
			message : "Data recieved",
			data : result
		})
	}).catch(error =>{
		res.status(500).json({
			error : {
				message : "An error occured"
			}
		})
	})
}


const postUsers = (req, res)=>{
	const user = new User({
		_id : new mongoose.Types.ObjectId,
		name : req.body.name,
		email : req.body.email,
		password : req.body.password,
		phone : req.body.phone
	})

	user.save()
	.then(result =>{
		res.status(200).json({
			message : "User signed-up.",
			data  : result
		})
	}).catch(error =>{
		res.status(500).json({
			error: {
				message : "An error occured."
			}
		})
	})
}

const updateUser = (req, res)=>{
	const {userId} = req.params;
	User.findByIdAndUpdate({_id : userId}, { name : req.body.name, email : req.body.email, password : req.body.password, phone : req.body.phone})
	.then(result =>{
		res.status(200).json({
			message : "User updated",
			data : result
		})
	}).catch((error)=>{
      	 res.status(400).json({
	           message : "Error updating post."
	       })
	   })
}


const deleteUser = (req, res)=>{
	const {userId} = req.params;
	User.deleteOne({_id : userId})
	.exec()
	.then(result =>{
		res.status(200).json({
			message : "User deleted",
			data : result
		})
	}).catch((error)=>{
      	 res.status(400).json({
	           message : "Error deleting post."
	       })
	   })
 }

userControllers = {getUsers, getOneUser, postUsers, updateUser, deleteUser} 
module.exports = userControllers