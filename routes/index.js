const express = require('express')
const router = express.Router()
const getController = require('../controllers')

const {getUsers, getOneUser, postUsers} = getController

router.get('/', getUsers)

router.get('/:id', getOneUser)

router.post('/sign-up', postUsers)

// router.put('./:id', updateUser)

module.exports = router