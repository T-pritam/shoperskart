"use client"
import { useState,useEffect } from "react"
import axios from "axios"
import NavScrollExample from "../components/Navbar"
import Cookies from "universal-cookie"
import { useRouter } from "next/navigation"
import OrderPage from "../components/orderpage"
import "../../../static/css/order.css"

export default function Order(){

    interface Products {
        _id: string;
        address: {
          name : string;
          street : string;
          city : string;
          state : string;
          phoneNumber : string;
          postalCode : string;
          type : string;
        };
        paymentMode : string;
        status: string;
        total: number;
        phoneNumber: number;
      }

    const cookies = new Cookies()
    const router = useRouter()
    const [orderitem,setOrderItem] = useState<Products[]>([])
    const [img,setImg] = useState("")
    

    useEffect(() => {
        const getOrderItems = async () => {
            const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"orders/user/"+cookies.get("access_token"))
            if(data.data[0]!=undefined){
                setOrderItem(data.data)
            }
        }
        if(cookies.get("access_token")){
           getOrderItems()
        }
        else{
            router.push("/login")
        }
        
    },[])
    return <div>
        <NavScrollExample />
        <div style={{margin:"50px 1vw 1vw 1vw"}}>
        <h2 style={{textAlign:"center"}}>Order Details</h2>
        {
            orderitem[0] != undefined ? (
                orderitem.map((prod:any) => (
                    <OrderPage 
                    key={prod._id}
                    order = {prod}  
                    products = {prod.item} 
                    img = {prod.item[0].product.thumbnail} 
                    title = {prod.item[0].product.title}
                    count = {prod.productsCount}
                    />
                ))
            ) : (
                <div style={{textAlign:"center",marginTop:"20vh"}}>
                    <h3 >Nothing In the Order</h3>
                    <a href="/"> <button type="button" className="btn btn-dark" style={{backgroundColor:"#467546"}}>Go to Home</button></a> 

                </div>
            )
        }
        
    </div>
    </div>
}