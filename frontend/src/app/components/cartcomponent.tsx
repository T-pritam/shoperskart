"use client"
import { useRouter } from "next/navigation"
import { useState,useEffect,useRef } from "react"
import axios from "axios"
import { toast } from "sonner"
import '../cart/b.css'


export default function CartComponent(props:any){
    const router = useRouter()
    const ref = useRef(null)
    const [quantity,setQuantity] = useState(props.product.quantity)
    const [price,setPrice] = useState(props.product.product.price)
    const [finalprice,setFinalPrice] = useState(props.product.product.price)

    useEffect (() => {
      const updateCart = async() => {
        setFinalPrice(price * quantity)
      const a = await axios.patch(process.env.NEXT_PUBLIC_BASE_URL+"cart/"+props.product._id,{
        quantity : quantity
      })
      }
      updateCart()

    },[quantity,price,finalprice])

    return <>
        <div className="card mb-3 cardd" style={{display:"inline-block"}}>
  <div className="row g-0">
    <div className="col-md-5">

      <img src={props.product.product.thumbnail} className="img-fluid rounded-start imgimg" alt="..." onClick={() => {
  localStorage.removeItem("prodId")
  localStorage.setItem("prodId",props.product.product._id)
  router.push('/product/'+props.product.product._id)}} />
    </div>
    <div className="col-md-7">
      <div className="card-body" style={{padding:"1vw"}}>
      <h5 className=" title-text">{props.product.product.title}</h5>
        <h6 className="brand">{props.product.product.brandname}</h6>
        <div>
        <h6 className="card-title" style={{display:"inline-block"}}>&#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(props.product.product.price-(props.product.product.price*props.product.product.discountPercentage)/100))}</h6>
        <p className="card-title" style={{textDecoration:"line-through",display:"inline-block",marginLeft: "5px"}}>&#8377;{new Intl.NumberFormat('en-IN').format(props.product.product.price)}</p>
        </div>
        <div className="mt-2" style={{display:"inline-block",justifyContent:"space-between"}}>
            <div style={{display:"inline-block"}}>
            <button type="button" className="btn btn-dark minusbtn" style={{backgroundColor:"#ddd",color:"black",border:"0"}} onClick={() => {
              
              props.changeAmount(quantity-1 != 0 ? -1 * props.product.product.price-(props.product.product.price*props.product.product.discountPercentage)/100:0)
              setQuantity(quantity-1 != 0 ? quantity-1 : quantity)
            }}>-</button>
            <h5 className="qty">{quantity} </h5> 
            <button type="button" className="btn btn-dark plusbtn" style={{backgroundColor:"#ddd",color:"black",border:"0"}} onClick={() => {
              props.changeAmount(1 * props.product.product.price-(props.product.product.price*props.product.product.discountPercentage)/100)
              
              setQuantity(quantity+1)
            }}>+</button>
            </div>
            <div className="rmvbtn">
              <button type="button" className="btn btn-dark" style={{backgroundColor:"#ddd",color:"black",border:"0"}} ref={ref} onClick={async (e) => {
          
                const a = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL+"cart/"+props.product._id)
                props.changeCart(props.product._id)
                props.changeAmount( -1 * props.product.product.price)
                props.changeCount()
              }}>Remove</button> 
            </div>
            <div className="savetocartbtn">
              <button type="button" className="btn btn-dark" style={{backgroundColor:"#ddd",color:"black",border:"0"}} ref={ref} onClick={async (e) => {
          
                const a = await axios.delete(process.env.NEXT_PUBLIC_BASE_URL+"cart/"+props.product._id)
                props.changeCart(props.product._id)
                props.changeAmount( -1 * props.product.product.price)
                props.changeCount()
              }}>Buy Now</button> 
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}