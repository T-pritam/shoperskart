const mongoose=require("mongoose")
const {Schema}=mongoose


const categorySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:false
    }
})

module.exports=mongoose.model("Category",categorySchema)