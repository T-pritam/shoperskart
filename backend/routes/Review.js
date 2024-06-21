const express=require('express')
const reviewController=require("../controllers/Review")
const router=express.Router()


router
    .post("/",reviewController.create)
    .get('/product/:id',reviewController.getByProductId)
    .get('/product/:user/:id',reviewController.getByUserProduct)
    .patch('/:id',reviewController.updateById)
    .delete("/:id",reviewController.deleteById)

module.exports=router