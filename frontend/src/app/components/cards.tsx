"use client"

import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Addtocart from './addtocart';
import Wishlist from './addtowishlist';
import { IoStarSharp } from "react-icons/io5";
import '../../../static/css/home.css'

function BasicExample(props:any) {
  const router = useRouter()
  const cookies = new Cookies()
console.log(props.product[117])
    

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


{
  prod.brand == "abc" ?
  <p style={{marginBottom:"0"}}>{prod.category.name}</p> :
  <p style={{marginBottom:"0"}}>{prod.brand}</p>
}

{
         prod.totalratings == 0 ? <div></div> :
         <div style={{display:"inline-block"}}>
       {
         prod.review < 2 ?
         <p className="mt-0 mb-0 homecardrating" style={{backgroundColor:"red"}}> {prod.rating.toFixed(1)}<IoStarSharp style={{margin:" 0 0 4px 2px"}} size={"15px"}  color="white"/></p> 
         : prod.rating < 3 ?
         <p className="mt-0 mb-0 homecardrating"  style={{backgroundColor:"orange"}}> {prod.rating.toFixed(1)}<IoStarSharp style={{margin:" 0 0 4px 2px"}} size={"15px"}  color="white"/></p> 
         : <p className="mt-0 mb-0 homecardrating"  style={{backgroundColor:"#388e3c"}}> {prod.rating.toFixed(1)}<IoStarSharp style={{margin:" 0 0 4px 2px"}} size={"13px"}  color="white"/></p> 
       }

       </div>

}
<p className="mt-0 mb-0" style={{display:"inline-block",marginLeft:"10px" ,color:"#777",fontSize:"14px"}}>({prod.totalratings})</p>

  <h6 className="card-title brandname">{prod.brand}</h6>
    <br />
        
        <div>
          <p className="card-title diba" >&#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(prod.price-(prod.price*prod.discountPercentage)/100))}</p>
          <p className="card-title dibc" >&#8377;{new Intl.NumberFormat('en-IN').format(prod.price)}</p>
          <p className="dibp" >{Math.ceil(prod.discountPercentage) }% off</p>
        </div>
          
</div>
</div>
</div>
      ))}

</div>
      
</div>

}
export default BasicExample;