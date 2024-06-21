const express = require('express')
const router = new express()
const products = require('../controllers/Products')

router.get('/getall',products.getall)
router.get('/get/:id',products.get)
router.post('/get',products.getbysearch)



module.exports = router
