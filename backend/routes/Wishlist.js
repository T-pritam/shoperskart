const express=require("express")
const wishlistController=require("../controllers/Wishlist")
const router=express.Router()


router
    .post("/",wishlistController.create)
    .get("/user/:id",wishlistController.getByUserId)
    .get("/user/list/:id",wishlistController.getByUserIdInList)
    .get("/getbyuseridandproductid/:product/:id",wishlistController.getbyuseridandproductid)
    .patch("/:id",wishlistController.updateById)
    .delete("/:id",wishlistController.deleteById)
    .delete("/:product/:id",wishlistController.deleteByUserId)

module.exports=router