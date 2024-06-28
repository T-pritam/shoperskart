const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/EcommDB")
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}