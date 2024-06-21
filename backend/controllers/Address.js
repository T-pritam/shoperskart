const Address = require("../models/Address")
const onlytoken = require("../utils/onlyToken")


exports.create=async(req,res)=>{
    try {
        req.body.user = onlytoken(req.body.user)
        const created=new Address(req.body)
        await created.save()
        res.status(201).json(created)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error adding address, please fill all the fields'})
    }
}

exports.getByUserId = async (req, res) => {
    try {
        req.params.id = onlytoken(req.params.id)
        const {id}=req.params
        const results=await Address.find({user:id})
        res.status(200).json(results)
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error fetching addresses, please try again later'})
    }
};

exports.getById = async (req, res) => {
    try {
        const {id}=req.params
        const results=await Address.findById(id)
        res.status(200).json(results)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error fetching addresses, please try again later'})
    }
};

exports.updateById=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await Address.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updated)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error updating address, please try again later'})
    }
}

exports.deleteById=async(req,res)=>{
    try {
        const {id}=req.params
        const deleted=await Address.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error deleting address, please try again later'})
    }
}


