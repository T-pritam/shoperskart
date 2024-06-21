"use client"
import axios from "axios"
import { useRef } from "react"
import Cookies from "universal-cookie"
import { useState,useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Toaster, toast } from 'sonner'

export default function Addtocart(props:any){
    const cookies = new Cookies()
    const router = useRouter()
    const [auth,setAuth] = useState(false)
    const [cartProd,setcartProd] = useState<unknown[]>([])
    const ref = useRef<HTMLButtonElement>(null)

    const handleClick = useCallback(async () => {
        const cartProduct = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"cart/user/list/"+cookies.get("access_token"))
        setcartProd(cartProduct.data)
    },[])


    useEffect(() =>{

        if(cookies.get("access_token")){
            setAuth(true)
            handleClick()
        }
       
        
    },[handleClick])

    async function AddtocartFunc(){
                if(ref.current){
                    ref.current.innerHTML = "Go to Cart"
                }

            try{     
                const addprod = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'cart',{
                user : cookies.get("access_token"),
                product : props.product._id,
            })
              
            }
            catch(error){
                console.log(error)
            }
    }
    
if (auth){
    if( cartProd?.includes(props.product._id)){
        return<>
        <button  type="button" className="btn btn-dark" onClick={() => {
            router.push("/cart")
        }}>Go to Cart</button>   
        </>
         
    }
    else{
        return<>
        <button type="button" className="btn btn-dark" ref={ref} onClick={AddtocartFunc}>Add to cart</button>   
        </>
    } 
}
else{
    
    return <>
    </>
}

}