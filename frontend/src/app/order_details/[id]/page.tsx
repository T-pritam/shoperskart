"use client";
import axios from "axios";
import NavScrollExample from "@/app/components/Navbar";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import '../../../../static/css/orderdetail.css'

export default function OrderDetails({
  params,
}: {
  params: {
    id: string;
  };
}){

  interface Products {
    id: number;
    address: {
      name : string;
      street : string;
      city : string;
      state : string;
      phoneNumber : string;
      postalCode : string;
    };
    paymentMode : string;
    status: string;
    total: number;
  }

  const router = useRouter()
  const cookies = new Cookies()
  const [OrderProduct,setOrderProducts] = useState<Products[]>([])
  const [products,setProducts] = useState<any[]>([])

  useEffect(() => {
    const getOrderDetails = async () => {
      const orderDetails = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"orders/"+params.id)
      setOrderProducts(orderDetails.data)
      setProducts(orderDetails.data.item)
    }

    getOrderDetails()
  },[])

 return <div>
    <NavScrollExample />
    <div style={{ margin: "50px 0vw 0vw 7vw"}}>
    <div>
      <div className="deliveryAdd">
        <h4>Delivery Address</h4>
        <p className="address mb-0">{OrderProduct.address.name}</p>
        <p className="address mb-0">{OrderProduct.address.street}</p>
        <p className="address mb-0">{OrderProduct.address.city}-{OrderProduct.address.postalCode},{OrderProduct?.address.state}</p>
        <p className="address mb-0">Address Type : {OrderProduct.address.type}</p>
        <p className="address">{OrderProduct.address.phoneNumber}</p>
      </div>
      <div className="status">
        <h4 className="dstatus">Delivery Status : {OrderProduct.status}</h4>
        <h4 className="dstatus">Payment Mode : {OrderProduct.paymentMode}</h4>
        <h4 className="amount">Total Amount&nbsp;&nbsp;&nbsp;&nbsp; : &#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(OrderProduct?.total))}</h4>
      </div>
      <div>
        
      </div>
      
      </div>
      <div>
   
      {
        products.map((prod:any) => (
          <div key={prod.product._id} className="rateproduct">
            <div style={{display:"flex",justifyContent:"space-around",textAlign:"center"}} >
                <div style={{cursor:"pointer"}}  onClick={() => {
              router.push(`/product/${prod.product._id}`)
            }}>
                  <img src={prod.product.thumbnail} className="imgwidth" alt="" />
                  <p className="orderDetailstit">{prod.product.title}</p>
                </div>
                <div>
                  <p className="mb-0">Price : &#8377;{new Intl.NumberFormat('en-IN').format(prod.product.price * prod.quantity)}</p>
                  <p >Quantity : {prod.quantity}</p>
                  <button type="button" className="btn btn-dark mt-4"  onClick={() => {
                    router.push(`/rate_product/${prod.product._id}`)
                  }}>Rate Product</button>
                  </div>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  </div>;
}
