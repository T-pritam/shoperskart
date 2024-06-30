const Product = require('../models/Product')
const Brand = require('../models/Brand')

exports.getall = async (req, res) => {
    try {
        if(req.query.page == 0){
            req.query.page = 9
        }
        const filter={}
        let skip=0
        let limit=0
        if(req.query.brand){
            filter.brand={$in:req.query.brand}
        }

        if(req.query.category){
            filter.category={$in:req.query.category}
        }

        if(req.query.user){
            filter['isDeleted']=false
        }

        if(req.query.sort){
            sort[req.query.sort]=req.query.order?req.query.order==='asc'?1:-1:1
        }

        if(req.query.page && req.query.limit){

            const pageSize=req.query.limit
            const page=req.query.page

            skip=pageSize*(page-1)
            limit=pageSize
        }
        const totalDocs=await Product.find(filter).populate("category").countDocuments().exec()
        const results=await Product.find(filter).populate("category").skip(skip).limit(limit).exec()

        res.set("X-Total-Count",totalDocs)

        res.status(200).json(results)
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error fetching products, please try again later'})
    }
};

exports.get = async (req,res) => {
    try{
        const product =await Product.findById(req.params.id).populate("category")
        return res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message:'Error fetching product, please try again later'})
    }
}

exports.getone = async (req,res) => {
    try{
        const product =await Product.findById(req.params.id).countDocuments().exec()
        return res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message:'Error fetching product, please try again later'})
    }
}

exports.getbysearch = async (req,res) => {
    try{
        const { search } = req.body
        const product =await Product.find({title:{$regex:search,$options : "i"}}).populate('category')
        return res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({message:'Error fetching product, please try again later'})
    }
}
