const {seedBrand}=require("./Brand")
const {seedCategory}=require("./Category")
const {seedProduct}=require("./Product")
const {seedUser}=require("./User")
const {seedReview} = require("./Review")
const {connectToDB}=require("./db")

const seedData=async()=>{
    try {
        await connectToDB()
        console.log('Seed [started] please wait..');
        // await seedBrand()
        // await seedCategory()
        // await seedProduct()
        await seedUser()
        // await seedReview()

        console.log('Seed completed..');
    } catch (error) {
        console.log(error);
    }
}

seedData()