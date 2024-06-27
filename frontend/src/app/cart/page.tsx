"use client"
import axios from "axios"
import { useEffect,useState } from "react"
import Cookies from "universal-cookie"
import CartComponent from "../components/cartcomponent"
import NavScrollExample from "../components/Navbar"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import './b.css'

export default function Cart(){
    const cookie = new Cookies()
    const router = useRouter()
    const [cart,setCart] = useState<unknown[]>([])
    const [count,setCount] = useState(0)
    const [auth,setAuth] = useState(false)
    const [totalProd,setTotalProd] = useState(0)
    const [totalprice,setTotalPrice] = useState(0)
    

    function handleStateAmount(newValue:any) {
        setTotalPrice(totalprice + newValue);
        if(newValue != 0){
            newValue > 0?setTotalProd(totalProd+1):setTotalProd(totalProd-1)
        }
     }

     async function handleStateCart(newValue:any) {
        const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"cart/user/"+cookie.get("access_token"))
        setCart(data.data)
     }

     async function handleStateCount(newValue:any){
        setCount(count - 1)
        
     }

    useEffect(() => {
        const getcart = async () => {
            try{
                if(cookie.get("access_token")){
                    setAuth(true)
                }
                const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"cart/user/"+cookie.get("access_token"))
                setCart(data.data)
                var a =0,b = 0,c = 0
                data.data.forEach((prod:any )=> {
                  a = (a + prod.quantity);
                  b = b + ((prod.product.price-(prod.product.price*prod.product.discountPercentage)/100) * prod.quantity);
                 c = c + 1;
                }
                )  
                setTotalProd(a)
                setTotalPrice(b)
                setCount(c)
         
            }
            catch(error){
                console.log(error)
            }
        }
        getcart()
    },[])
    if(auth == false){
        return <div>
            <NavScrollExample />
            <div style={{marginTop:"50px"}}>
            <div style={{textAlign:"center",paddingTop:"15vw"}}>
            <h1>Missing Cart items?</h1>
            <p>Login to see the items you added previously</p>
            <button style={{background:"#fb641b",padding:"0.83vw 5vw 0.83vw 5vw",border:'0',color:"white"}} onClick={() => router.push('/login')}>Login</button>
        </div>
            </div>
        </div>
    }

    if(totalProd == 0){
        return<>
        <NavScrollExample />
        <div style={{marginTop:"50px"}}>
        <div style={{textAlign:"center",paddingTop:"30vh"}}>
                <h3>Nothing in the Cart</h3>
               <a href="/"> <button type="button" className="btn btn-dark" style={{backgroundColor:"#467546"}}>Add Products</button></a> 
        </div>
        </div>
        
        </>
    }

    else{
        return <div style={{marginTop:"50px",alignItems:"center"}}>
    <NavScrollExample />
        <div className="maindiv">
        <div className="aaab">
        {    
            cart.map((prod:any) => (
                <CartComponent key={prod._id} product = {prod}
                changeAmount = {handleStateAmount}
                changeCart = {handleStateCart}
                changeCount = {handleStateCount}

                />
            ))
        }
        </div>
        <div className="cartprice">
        <h5>Products&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {count}</h5>
        <h5>Price ({totalProd} items)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {new Intl.NumberFormat('en-IN').format(Math.floor(totalprice))}</h5>
        <h5>Discount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 7%</h5>
        <h5>Delivery Charges &nbsp;: FREE</h5>
        <hr />
        <h5>Total Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {new Intl.NumberFormat('en-IN').format(Math.floor(totalprice-(totalprice/100*7)))}</h5>
        <hr />
        
        <div style={{textAlign:"center"}}>
        <a href="/checkout/all"> <button type="button" className="btn btn-dark" style={{backgroundColor:"#467546",margin:"10px"}}>Proceed to Checkout</button></a> 
        <a href="/"> <button type="button" className="btn btn-dark" style={{backgroundColor:"#467546"}}>Add More</button></a> 
        </div>
        </div>
        </div>
        
    </div>
    }
}