const Order = require("../models/Order");
const Cart=require('../models/Cart');
const onlytoken = require("../utils/onlyToken")


exports.create=async(req,res)=>{
    try {
        req.body.user = onlytoken(req.body.user)
        if(req.body.address == ""){
            return res.json({"message" :"Delivery Address Must be Provided"})
        }
        if(req.body.paymentMode == ""){
            return res.json({"message" : "Payment Mode is not selected"})
        }
        const created=new Order(req.body)
        await created.save()
        
        const deletecart = await Cart.deleteMany({user:req.body.user})
        return res.status(201).json({message : "Order Placed"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error creating an order, please trying again later'})
    }
}

exports.createOne=async(req,res)=>{
    try {
        req.body.user = onlytoken(req.body.user)
        const created=new Order(req.body)
        await created.save()
        await Cart.findByIdAndDelete(req.params.id)
        return res.status(201).json({message : "Order Placed"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error creating an order, please trying again later'})
    }
}

exports.getByUserId=async(req,res)=>{
    try {
        const id=onlytoken(req.params.id)
        const results=await Order.find({user:id}).populate({path:"address"});
        res.status(200).json(results)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error fetching orders, please trying again later'})
    }
}

exports.getById = async (req, res) => {
    try {
        const results = await Order.findById(req.params.id).populate("address")

        res.status(200).json(results)

    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error fetching orders, please try again later'})
    }
};

exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Order.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updated)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error updating order, please try again later'})
    }
}

exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Order.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error deleting cart item, please trying again later'})
    }
}