"use client"
import axios from "axios"
import { useEffect,useState } from "react"
import Cookies from "universal-cookie"
import WishlistComponent from "../components/wishlistcomponent"
import NavScrollExample from "../components/Navbar"
import { useRouter } from "next/navigation"
import "../../../static/css/wishlist.css"


export default function Cart(){
    const cookie = new Cookies()
    const router = useRouter()
    const [cart,setCart] = useState<unknown[]>([])
    const [count,setCount] = useState(0)


    async function handleWishlist(newValue:any) {
        setTimeout(async () => {
            const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"wishlist/user/"+cookie.get("access_token"))
            setCart(data.data)
        },500)
     }

    useEffect(() => {
        const getcart = async () => {
            try{
                if(cookie.get("access_token")){
                    const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"wishlist/user/"+cookie.get("access_token"))
                setCount(4)
                setCart(data.data)
                }
                else{
                    router.push("/login")
                }
            }
            catch(error){
                console.log(error)
            }
        }
        getcart()
    },[count])


    if(cart?.length == 0){
        return<div style={{marginTop:"50px"}}>
        <NavScrollExample />
        <div style={{textAlign:"center",paddingTop:"30vh"}}>
                <h3>Nothing in the Wishlist</h3>
               <a href="/"> <button type="button" className="btn btn-dark" style={{backgroundColor:"#467546"}}>Add Products</button></a> 
        </div>
        
        </div>
    }
    else{
        return <div style={{marginTop:"50px"}}>
    <NavScrollExample />
    <div style={{padding : ""}}>
        
    <h1 style={{textAlign:"center"}}>Products In Wishlist</h1>
    
        {
            
            cart.map((prod:any) => (
                <WishlistComponent key={prod._id} product = {prod} 
                changeWishlist = {handleWishlist}
                />
            ))
        }
    </div>
    </div>

    }

    
}