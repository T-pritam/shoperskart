const Category=require("../models/Category")
const Product=require("../models/Product")

exports.getAll=async(req,res)=>{
    try {
        const result=await Category.find({})
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error fetching categories"})
    }
}

exports.update=async(req,res)=>{
    try {
        const filter={}
        filter.category={$in:req.query.category}
        const totalDocs=await Product.find(filter).populate("brand")
        totalDocs.update({})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error fetching categories"})
    }
}