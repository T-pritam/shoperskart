const express = require('express')
const router=express.Router()
const userController = require('../controllers/User')

router.get('/get/:id',userController.getbyid)
router.post('/get/',userController.getbymail)
router.patch('/update/:id',userController.update)


module.exports = router