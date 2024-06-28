const Wishlist = require("../models/Wishlist")
const onlyToken = require('../utils/onlyToken')

exports.create=async(req,res)=>{
    try {
        req.body.user = onlyToken(req.body.user)
        const total = await Wishlist.find({user : req.body.user,product : req.body.product}).countDocuments().exec()
        if(total == 0){
            const created=await new Wishlist(req.body).populate({path:"product",populate:["category"]})
            await created.save()
            res.status(201).json(created)
        }
        else{
            res.status(500).json({message:"Error adding product to wishlist, Alredy in the cart"})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error adding product to wishlist, please try again later"})
    }
}
exports.getByUserId=async(req,res)=>{
    try {
        req.params.id = onlyToken(req.params.id)
        const {id}=req.params
        let skip=0
        let limit=0

        if(req.query.page && req.query.limit){
            const pageSize=req.query.limit
            const page=req.query.page

            skip=pageSize*(page-1)
            limit=pageSize
        }

        const result=await Wishlist.find({user:id}).skip(skip).limit(limit).populate({path:"product"})
        const totalResults=await Wishlist.find({user:id}).countDocuments().exec()

        res.set("X-Total-Count",totalResults)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error fetching your wishlist, please try again later"})
    }
}
exports.updateById=async(req,res)=>{
    try {
        const {id} = req.params
        const updated=await Wishlist.findByIdAndUpdate(id,req.body,{new:true}).populate("product")
        res.status(200).json(updated)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error updating your wishlist, please try again later"})
    }
}
exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Wishlist.findByIdAndDelete(id)
        return res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error deleting that product from wishlist, please try again later"})
    }
}
exports.deleteByUserId=async(req,res)=>{
    try {
        req.params.id=onlyToken(req.params.id)
        const deleted=await Wishlist.findOneAndDelete({user : req.params.id,product : req.params.product})
        const delet=await Wishlist.find({user : req.params.id,product : req.params.product})
        console.log(delet)
        return res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error deleting that product from wishlist, please try again later"})
    }
}

exports.getByUserIdInList=async(req,res)=>{
    try {
        req.params.id = onlyToken(req.params.id)
        const {id}=req.params
        const totalDocs=await Wishlist.find({user:id}).countDocuments().exec()
        const result=await Wishlist.find({user:id}).populate('product')
        const arr = []
        result.forEach((prod) =>(
            arr.push(prod.product.slNo)
        ))

        res.status(200).json({wishlist : arr,total : totalDocs})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error fetching your wishlist, please try again later"})
    }
}

exports.getbyuseridandproductid = async(req,res) => {
    try{
        req.params.id = onlyToken(req.params.id)
        const isWishlisted=await Wishlist.find({user : req.params.id,product : req.params.product}).countDocuments().exec()
        find = false
        isWishlisted == 0 ? find = false :find = true
        res.status(200).json({find})
    }
    catch (error) {
        res.status(500).json({message:"Error fetching your wishlist, please try again later"})
    }

}