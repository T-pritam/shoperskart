const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://pritamrao37:pritamrao37@cluster0.7f1pqc4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}