
const {seedCategory}=require("./Category")
const {seedProduct}=require("./Products")
const {seedUser}=require("./User")
const {seedOrder}=require("./Order")
const {seedReview} = require("./Review")
const {seedAddress} = require("./Address")
const {connectToDB}=require("./db")

const seedData=async()=>{
    try {
        await connectToDB()
        console.log('Seed [started] please wait..');
        // await seedCategory()
        await seedProduct()
        // await seedAddress()
        // await seedUser()
        await seedReview()
        // await seedOrder()

        console.log('Seed completed..');
    } catch (error) {
        console.log(error);
    }
}

seedData()