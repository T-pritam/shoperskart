const express=require('express')
const cartController=require('../controllers/Cart')
const router=express.Router()

router
    .post("/",cartController.create)
    .get("/user/:id",cartController.getByUserId)
    .get("/user/list/:id",cartController.getByUserIdInList)
    .get("/user/:user/:id",cartController.getbyUserAndProductId)
    .patch("/:id",cartController.updateById)
    .delete("/:id",cartController.deleteById)
    .delete("/user/:id",cartController.deleteByUserId)

module.exports=router