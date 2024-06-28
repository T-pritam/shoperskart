"use client"
import axios from "axios"
import Cookies from "universal-cookie"
import { useState, useEffect } from "react"
import NavScrollExample from "./Navbar"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import '../checkout/[id]/c.css'

export default function ProceedToCheckoutOne(props: any) {
    const cookies = new Cookies()
    const router = useRouter()

    

    const [product, setProduct] = useState()
    const [img,setImg] = useState("")
    const [title,setTitle] = useState("")
    const [address, setAddress] = useState<unknown[]>([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalprice, setTotalPrice] = useState(0)
    const [items, setItems] = useState(0)
    const [price, setPrice] = useState(0)
    const [payment, setPayment] = useState("")
    const [oneaddress, setOneAddress] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        const getProducts = async () => {
            if (!cookies.get("access_token")) {
                router.push("/login")
            }
            else {
                const prod = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "products/get/" + props.productId)
                const addresses = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "address/user/" + cookies.get("access_token"))
                setAddress(addresses.data)
                setProduct(prod.data)
                setImg(prod.data.thumbnail)
                setTitle(prod.data.title)
                setTotalProducts(1)
                setItems(1)
                setPrice(Math.floor(prod.data.price - (prod.data.price * prod.data.discountPercentage) / 100))
                setTotalPrice(Math.floor(prod.data.price - (prod.data.price * prod.data.discountPercentage) / 100))
            }
        }

        getProducts()
    }, [])


    async function handleOrder(){
        if(oneaddress == ""){
            toast.error("Delivery Address Must be Provided")
        }
        if(payment == ""){
            toast.error("Payment Mode is not selected")
        }
        if(oneaddress != "" && payment != ""){
        const a = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+`cart/createone`,{
            user : cookies.get("access_token"),
            product : props.productId
        })
        const order = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"orders/createone/"+a.data._id,{
            user : cookies.get("access_token"),
            address : oneaddress,
            productsCount : totalProducts,
            paymentMode : payment,
            item : a.data,
            total : Math.floor(totalprice - (totalprice / 100 * 7))
        })
        if(order.status == 201){
            setTimeout(() => {
                toast.success("Order Placed")
                router.push("/order")
            }, 1000);
        }
    }}
    if(totalProducts == 0){
        return<div style={{marginTop:"50px"}}>
        <NavScrollExample />
        <div style={{textAlign:"center",paddingTop:"30vh"}}>
                <h3>Nothing to Checkout in the Cart</h3>
               <a href="/"> <button type="button" className="btn btn-dark" style={{backgroundColor:"#467546"}}>Go to Home</button></a> 
        </div>
        </div>
    }
    else{
return <div style={{ width: "100%", height: "100%", padding: " 4vw 5vw 5vw 5vw" }}>

            <div className="checkoutprod">
                <h6>Address :</h6> <select className="form-select" onChange={(e) => setOneAddress(e.target.value)} aria-label="Default select example">
                    <option selected>Select Address</option>
                    {
                        address.map((prod: any) => (
                            <option key={prod._id} value={prod._id}>Name : {prod.name} , {prod.street},{prod.city},{prod.state},{prod.postalCode}, Phone-{prod.phoneNumber}</option>
                        ))
                    }
                </select>
                <br />
                <a href="/address"> <button type="button" className="btn btn-dark" style={{ backgroundColor: "#467546", marginBottom: "2vw" }}>Add/Edit Address</button></a>


                <div>

                    <div className="checkoutdiv" style={{ width: '100%', border: "1px solid black", margin: "1vh", borderRadius: "8px" }}>
                        <div className="imgimg" style={{ display: "inline-block", overflow: "hidden", height: "15vh" }}>
                            <img src={img} className="imgim" alt="" />
                        </div>
                        <div className="checkouttextone">
                            <h4 className="checkouttit">{title}</h4>
                            <div className="checkoutflex">
                                <h6 className="checkh6">Quantity : 1</h6>
                                <h6 className="checkh6">Price : &#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(price))}
                                </h6>
                            </div>

                            <div style={{ display: "inline-block" }}>
                                <button type="button" className="btn checkoutminusbtn"  style={{backgroundColor:"#ddd",color:"black",border:"0"}} onClick={() => {
                                    setTotalPrice(items - 1 != 0 ? totalprice - price: 0)
                                    setItems(items - 1 != 0 ? items - 1 : items)

                                }}>-</button>
                                <h5 className="qty" style={{display:"inline-block",margin:"0 1vh 0 1vh"}}>{items} </h5>
                                <button type="button" className="btn chceckplusbtn"  style={{backgroundColor:"#ddd",color:"black",border:"0"}} onClick={() => {
                                    setTotalPrice(totalprice + price)

                                    setItems(items + 1)
                                }}>+</button>
                            </div>




                        </div>

                    </div>

                </div>
            </div>


            <div className="checkoutprice">
                <h4 className="checkh4">Products&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {totalProducts}</h4>
                <h4 className="checkh4">Price ({items} items)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &#8377;{new Intl.NumberFormat('en-IN').format(totalprice)}</h4>
                <h4 className="checkh4">Discount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 7%</h4>
                <h4 className="checkh4">Delivery Charges &nbsp;: FREE</h4>
                <hr />
                <h4 className="checkh4">Total Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(totalprice - (totalprice / 100 * 7)))}</h4>
                <hr />

                <div>
                    Select Payment Mode :
                    <select name="" id="" onChange={(e) => setPayment(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="COD">COD</option>
                        <option value="UPI">UPI</option>
                        <option value="CARD">CARD</option>
                    </select>
                </div>

                <div style={{ textAlign: "center" }}>
                    <button type="button" className="btn btn-dark" onClick={handleOrder} style={{ backgroundColor: "#467546", margin: "10px" }}>Place Order</button>
                    <a href="/cart"> <button type="button" className="btn btn-dark" style={{ backgroundColor: "#467546" }}>Go to Cart</button></a>
                </div>
            </div>
        </div>
    }
}