const express = require('express')
const router = express.Router()
const getController = require('../controllers')

const {getUsers, getOneUser, postUsers, updateUser, deleteUser} = getController

router.get('/', getUsers)

router.get('/:userId', getOneUser)

router.post('/sign-up', postUsers)

router.put('/:userId', updateUser)

router.delete('/:userId', deleteUser)

module.exports = router