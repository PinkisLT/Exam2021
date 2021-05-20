const express = require('express')
const router = express.Router()
const controller = require('../controlers/main')
const validateUser = require('../middleWare/validateUser')


router.post('/addUser', validateUser, controller.addUser)
router.post('/updateUser/:id', validateUser, controller.updateUser)
router.get('/deleteUser/:id', controller.deleteUser)
router.get('/singleUser/:id', controller.getSingleUser)
router.get('/users', controller.getUsers)


module.exports = router