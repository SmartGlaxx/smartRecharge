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
	const {id} = req.params

	User.findOne({_id : id})
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
		name : req,body,name,
		email : req,body,email,
		password : req,body,password,
		phone : req,body,phone
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

// const updateUser = (req, res)=>{
// 	const {id} = req.params;
// 		name : req.body.name
// 		email : req.body.email
// 		password : req.body.password
// 		phone : req.body.phone

// 	User.findOneAndUpdate({_id : id}, { name : name, email : email, password : password, phone : phone})
// 	.then(result =>{
// 		res.status(200).json({
// 			message : "User updated",
// 			data : result
// 		})
// 	}).catch((error)=>{
//       	 res.status(400).json({
// 	           message : "Error updating post."
// 	       })
// 	   })
// }



userControllers = {getUsers, getOneUser, postUsers} 
module.exports = userControllers