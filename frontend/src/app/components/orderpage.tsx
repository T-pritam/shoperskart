import axios from "axios"
import { useRouter } from "next/navigation"
import OrderDetails from "../order_details/[id]/page"
import "../../../static/css/order.css"

export default function OrderPage(props:any){
    const router = useRouter()

    return <div>
        
        <div className="outerdiv" onClick={() => {
            router.push(`/order_details/${props.order._id}`) }}>
                <div className="orderimgdiv">
                    <img src={props.img} className="orderimg" alt="" />
                    <h6 className="ordertitle">{props.title}</h6>
                </div>
                <h6 className="ordertitl">{props.title}</h6>
                
                
                    {
                        props.count - 1 != 0?
                        <div>
                            <div className="seconddiv">
                    <h4>&</h4>
                        <h4>{props.count - 1} Others</h4>
                        <h4 className="d-inline-block">Price : </h4><h5 className="d-inline-block">&#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(props.order.total))}</h5>
                    </div>
                        <h4 className="responsivediv">& {props.count - 1} others</h4>
                        <h4 className="responsivedivv">Total Amount : &#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(props.order.total))}</h4>
                    </div>
                :
                <div>
                    
                    <div className="seconddiv">
                        <h4 className="price">Price : </h4><h5 className="price">&#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(props.order.total))}</h5>
                    </div>
                    <h4 className="responsivedivvv">Total Amount : &#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(props.order.total))}</h4>
                </div>
                    }
                
                <div className="thirddiv">
                    <h5 style={{marginBottom:"0"}}>Payment Mode</h5>
                    <p>{props.order.paymentMode}</p>
                    <h5 style={{marginBottom:"0"}}>Order Status</h5>
                    <p>{props.order.status}</p>
                </div>
                <div className="orderstatus">
                    <p className="statustit">Order Status : </p>
                    <p className="statusval"> {props.order.status}</p>
                </div>
                <div className="fourthdiv">
                    
                    <h5 className="d-inline-block" style={{marginBottom:"0"}}>Delivery Address</h5>
                    <p className="d-inline-block" >{props.order.address.street},{props.order.address.city}{props.order.address.postalCode}{props.order.address.state}</p>
                    <h5 style={{marginTop:"10px",marginBottom:"0"}}>Phone number</h5>
                    <p>{props.order.address.phoneNumber}</p>
                </div>
        </div>
    </div>
}