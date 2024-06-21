"use client"

import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Addtocart from './addtocart';
import Wishlist from './addtowishlist';
import '../../../static/css/home.css'

function BasicExample(props:any) {
  const router = useRouter()
  const cookies = new Cookies()
    

return <div>

<div style={{width:"100%",maxHeight:"15rem",position: "relative",margin:"2vw 0 0 0",textAlign:"center"
}}>



    {props.product.map((prod:any) => (
<div key={prod._id} className='boxShadow'>
  
<div className="cardd">
  <img src={prod.thumbnail} className="image" alt="..." onClick={ () => {
  router.push('/product/'+prod._id)}} />
  
<div className="card-body" style={{textAlign:"left"}}>
<div className='divpricebtn'>
  <div><p className="card-title titletext prodtitle">{prod.title}</p></div>
    <div className='wishlisticon wishlistbtn'><Wishlist product = {prod} /></div>
</div>
  <h6 className="card-title brandname">{prod.brand.name}</h6>
    <br />
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"2px"}}>
        <div>
          <p className="card-title diba" style={{fontSize:"21px",fontWeight:"500",marginTop:"2px"}}>&#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(prod.price-(prod.price*prod.discountPercentage)/100))}</p>
          <p className="card-title dibc" style={{fontSize:"16px",fontWeight:"500",marginTop:"2px",textDecorationLine:"line-through",marginBottom:"0"}}>&#8377;{new Intl.NumberFormat('en-IN').format(prod.price)}</p>
          <p className="card-title dibb" style={{fontSize:"16px",fontWeight:"500",marginTop:"2px",color:"darkseagreen",marginBottom:"0"}}>{prod.discountPercentage }% off</p>
        </div>
          <div className='addtocart'>
            <Addtocart product = {prod} />
          </div>
        </div>
</div>
</div>
</div>
      ))}

</div>
      
</div>

}
export default BasicExample;