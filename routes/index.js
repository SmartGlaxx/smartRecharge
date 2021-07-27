const express = require('express')
const router = express.Router()
const getController = require('../controllers')

router.get('/', getController)

module.exports = router