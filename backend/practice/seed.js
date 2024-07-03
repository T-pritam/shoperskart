
const {seedCategory}=require("./Category")
const {seedProduct}=require("./Products")
const {seedReview} = require("./Review")
const {connectToDB}=require("./db")

const seedData=async()=>{
    try {
        await connectToDB()
        console.log('Seed [started] please wait..');
        await seedCategory()
        await seedProduct()
        await seedReview()

        console.log('Seed completed..');
    } catch (error) {
        console.log(error);
    }
}

seedData()