"use client"
import axios from "axios"
import { useRef } from "react"
import Cookies from "universal-cookie"
import { useState,useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { IoHeartOutline } from "react-icons/io5";
import { toast } from 'sonner'


export default function Wishlist(props:any){
    const router = useRouter()
    const cookies = new Cookies()
    const [auth,setAuth] = useState(false)
    const [wishlistProd,setwishlistProd] = useState<unknown[]>([])
    const [count,setCount] = useState(0)

    const ref = useRef<HTMLImageElement>(null);

    const handleClick = useCallback(async () => {
        const cartProduct = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"wishlist/user/list/"+cookies.get("access_token"))
        setwishlistProd(cartProduct.data)
    },[,count])

    useEffect(() =>{

        if(cookies.get("access_token")){
            setAuth(true)
            handleClick()
        }  
    },[handleClick])


    async function addtowish(){
        try{
            if(ref.current){
                ref.current.src = 'https://as2.ftcdn.net/v2/jpg/07/43/46/69/1000_F_743466913_L1UF39XRnPbNDB2z5Pt7rh2DY12ZxNJq.jpg'
            }
            const a = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"wishlist/",{
                user : cookies.get("access_token"),
                product : props.product._id,
            })
            setCount(2)
        }
        catch(error){
            console.log(error)
        }
    }
if (auth){
    if( wishlistProd?.includes(props.product._id)){
        return<>
        <div><img className='imgofcards' style={{width:"32px"}} src="https://as2.ftcdn.net/v2/jpg/07/43/46/69/1000_F_743466913_L1UF39XRnPbNDB2z5Pt7rh2DY12ZxNJq.jpg"
         alt="" /></div> 
        </>
         
    }
    else{
       return  <div>
        <img className='imgofcards' id="imgg" onMouseOver={() => {
            var a = document.getElementById('imgg')
            if(ref.current){
                ref.current.style.width = "33px"
            }
        }}  onMouseOut={() => {
            var a = document.getElementById('imgg')
            if(ref.current){
                ref.current.style.width = "28px"
            }
        }}
        ref={ref} src="https://as2.ftcdn.net/v2/jpg/06/24/61/69/1000_F_624616942_pjDJQzVBgeusYxAUEGQMm7gUhibI9KvH.webp" alt="" style={{cursor:"pointer",width:'28px'}} onClick={addtowish} /></div>
    }
    
    
}
else{
    
    return <>
    <div><img className='imgofcards' src="https://as2.ftcdn.net/v2/jpg/06/24/61/69/1000_F_624616942_pjDJQzVBgeusYxAUEGQMm7gUhibI9KvH.webp" alt="" onClick={() => {
        router.push("/login")
    }} style={{cursor:"pointer"}} />
    </div>
    </>
}
}