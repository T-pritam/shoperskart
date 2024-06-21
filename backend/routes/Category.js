const express=require("express")
const categoryController=require("../controllers/Category")
const router=express.Router()

router
    .get("/",categoryController.getAll)
    .get("/update",categoryController.update)

    
module.exports=router