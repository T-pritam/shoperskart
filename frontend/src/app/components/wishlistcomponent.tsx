"use client"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import axios from "axios"
import Cookies from "universal-cookie"
import { toast } from "sonner"
import "../../../static/css/wishlist.css"

export default function WishlistComponent(props:any){
  const ref = useRef(null)
  const reff = useRef(null)
    const router = useRouter()
    const cookies = new Cookies()
    const [msg,setMsg] = useState("")

    async function AddtoCartfunc() {
      try{
        const addprod = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'cart',{
        user : cookies.get("access_token"),
        product : props.product.product._id,
    })
    if(addprod.data.message != "Product Added to Cart"){
      toast.error(addprod.data.message)
    }
    else{
      toast.success(addprod.data.message)
    }
    
    const remove = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL+"wishlist/"+props.product._id)
    props.changeWishlist()  
    }
    catch(error){
        console.log(error)
    }
      
    }
    async function RemoveFromwishlist() {
      try{
        
        const remove = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL+"wishlist/"+props.product._id)
        toast.error("Product Removed from Wishlist")
        props.changeWishlist()  
      
    }
    catch(error){
        console.log(error)
    }

    }

    return <>


<div className="carddd">
  <img src={props.product.product.thumbnail} className="card-img-top imgimgg" onClick={() => router.push('/product/'+props.product.product._id)} alt="..." /> 
  <div className="card-body">
    <h5 className="card-title titletext">{props.product.product.title}</h5>
    <div style={{display:"flex",justifyContent : "space-between",padding:"0 1vh 0 1vh "}}>
    <p className="card-text brandtext">{props.product.product.brand.name}</p>
    <p className="card-text">&#8377;{new Intl.NumberFormat('en-IN').format(props.product.product.price)}</p>
    </div>
    <div className="buttons">
    <button type="button" ref={ref} className="btn btn-dark" id="Add" onClick={AddtoCartfunc}>Add to Cart</button>
    <button type="button" ref={reff} className="btn btn-dark" id="Remove" onClick={RemoveFromwishlist}>Remove </button>
    </div>
    <div className="buttonss">
    <button type="button" ref={ref} className="btnn" id="Add" onClick={AddtoCartfunc}>Add to Cart</button>
    <button type="button" ref={reff} className="btnn" id="Remove" onClick={RemoveFromwishlist}>Remove </button>
    </div>
  </div>
  
</div>  

    </>
}