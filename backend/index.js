const express = require('express')
const cookieparser = require("cookie-parser")
const cors = require("cors")
const path = require("path"); 
const connectDB = require('./connectDB')
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const Authrouter = require('./routes/auth')
const Userroute = require('./routes/User')
const Productsrouter = require('./routes/products')
const cartrouter = require('./routes/Cart')
const wishlistrouter = require('./routes/Wishlist')
const addressrouter = require('./routes/Address')
const categoriesrouter = require('./routes/Category')
const orderroutes = require("./routes/Order")
const reviewroutes = require("./routes/Review");
require('dotenv').config();

const app = express()

const corsOptions = {
	origin: process.env.URL,
	credentials: true,
	optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions))
app.use(express.json())
app.use(passport.initialize());

app.use(express.static(path.resolve('./public')))
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))



connectDB().then(() => console.log("Database is connected"))

app.use('/auth',Authrouter)
app.use('/user',Userroute)
app.use('/products',Productsrouter)
app.use('/cart',cartrouter)
app.use('/wishlist',wishlistrouter)
app.use('/address',addressrouter)
app.use('/categories',categoriesrouter)
app.use("/orders",orderroutes)
app.use("/review",reviewroutes)


app.get('/',(req,res) =>{
    return res.json({server : "running"})
})

app.listen(8000,() => console.log("server started at PORT : 8000"))