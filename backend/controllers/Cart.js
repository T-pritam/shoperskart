const Cart=require('../models/Cart')
const onlytoken = require('../utils/onlyToken')

exports.create=async(req,res)=>{
    try {
        req.body.user = onlytoken(req.body.user)
        const find = await Cart.find({user : req.body.user,product : req.body.product}).countDocuments()
        if(find!=0){
            return res.json({"message" : "Product Already in the cart"})
        }
        const created=await new Cart(req.body).populate("product");
        await created.save()
        res.status(201).json({"message":"Product Added to Cart"})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error adding product to cart, please trying again later'})
    }
}

exports.createOne=async(req,res)=>{
    try {
        req.body.user = onlytoken(req.body.user)
        const created=await new Cart(req.body).populate("product");
        await created.save()
        console.log(created)
        res.status(201).json(created)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error adding product to cart, please trying again later'})
    }
}

exports.getByUserId=async(req,res)=>{
    try {
        req.params.id = onlytoken(req.params.id)
        const {id}=req.params
        const result = await Cart.find({ user: id }).populate("product");
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error fetching cart items, please trying again later'})
    }
}

exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Cart.findByIdAndUpdate(id,req.body,{new:true}).populate("product");
        res.status(200).json(updated)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error updating cart items, please trying again later'})
    }
}

exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Cart.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error deleting cart item, please trying again later'})
    }
}

exports.deleteByUserId=async(req,res)=>{
    try {
        const {id}=req.params
        await Cart.deleteMany({user:id})
        res.sendStatus(204)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Some Error occured while resetting your cart"})
    }

}



exports.getByUserIdInList=async(req,res)=>{
    try {
        req.params.id = onlytoken(req.params.id)
        const {id}=req.params
        const result = await Cart.find({ user: id }).populate({path:"product",populate:{path:"brand"}});
        const arr = []
        result.forEach((prod) =>(
            arr.push(prod.product._id)
        ))
        res.status(200).json(arr)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error fetching cart items, please trying again later'})
    }
}


exports.getbyUserAndProductId = async(req,res) =>{
    req.params.user = onlytoken(req.params.user)
    const {user,id} = req.params
    const product = await Cart.find({user:user,product:id}).countDocuments()
    return res.json({count : product})
}