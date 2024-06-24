const mongoose=require("mongoose")
const {Schema}=mongoose

const productSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    slNo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brandname:{
        type : String,
        required : true
    },
    price:{
        type:Number,
        required:true
    },
    discountPercentage: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0,
        required: false
    },
    totalreviews: {
        type: Number,
        default: 0,
        required: false
    },
    totalratings: {
        type: Number,
        default: 0,
        required: false
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    reviews:{
        type:Schema.Types.ObjectId,
        ref:"Review",
        required:false
    },
    returnPolicy:{
        type : String,
        required: false,
    },
    shippingInformation:{
        type : String,
        required: false,
    },
    stockQuantity:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true,versionKey:false})

module.exports=mongoose.model('Product',productSchema)