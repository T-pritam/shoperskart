"use client"

import { useEffect,useState,useCallback,useRef } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Addtocart from './addtocart';
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import {toast} from 'sonner'
import '../../../static/css/home.css'

function BasicExample(props:any) {
  const router = useRouter()
  const cookies = new Cookies()
  const [auth,setAuth] = useState(false)
  const [wishlistProd,setwishlistProd] = useState<unknown[]>([])  
  const [totalWishlit,settotalWishlit] = useState(0) 
  
  const [toggleStates, setToggleStates] = useState<boolean[]>(Array.from({ length: 200 }, () => false));

  useEffect(() =>{

    const getWishlistProd = async() => {
      try{
        const cartProduct = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"wishlist/user/list/"+cookies.get("access_token"))
        setwishlistProd(cartProduct.data.wishlist)
        settotalWishlit(cartProduct.data.total)
        const initialToggleStates = Array(200).fill(false);
        cartProduct.data.wishlist.map((prod:any) => {
          initialToggleStates[prod] = true
        })
        setToggleStates(initialToggleStates)
        }
        catch(err:any){
          toast.error(err.message)
        }
    }

    if(cookies.get("access_token")){
        setAuth(true)
        getWishlistProd()
    }  
},[])
const addtowish = async(index : any,id:any) => {
  const updatedStatus = [...toggleStates];
  updatedStatus[index] = !updatedStatus[index];
  setToggleStates(updatedStatus);

  try{
    if (updatedStatus[index]) {
      
      await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"wishlist/",{
        user : cookies.get("access_token"),
        product : id,
    });
    } else {
  
      await axios.delete(process.env.NEXT_PUBLIC_BASE_URL+`wishlist/${id}/${cookies.get("access_token")}`);
    }
  }
  catch(err){
    updatedStatus[index] = !updatedStatus[index];
    setToggleStates(updatedStatus);
    console.error('Failed to update wishlist', err);
  }
}



return <div>

<div className='homemaindiv' >



    {props.product.map((prod:any,index:number) => (
<div key={prod._id} className='boxShadow'>
  
<div className="cardd">
  <img src={prod.thumbnail} className="image" alt="..." onClick={ () => {
  router.push('/product/'+prod._id)}} />
  
<div className='cardbodyhomepage' onClick={ () => {
  router.push('/product/'+prod._id)}}>
<div className='divpricebtn'>
<p className="card-title titletext prodtitle">{prod.title}</p>
    <div>



      {
        auth ? <div>
          <FaHeart className="wishlisticon" 
        size={'20px'} 
        style={{ color: toggleStates[prod.slNo] ? '#ff1111' : '#c2c2c2', cursor: 'pointer' }}
        onClick={(e) => {
            e.stopPropagation();
            addtowish(prod.slNo,prod._id)}} 
            />
        </div> :
        <div>
          <FaHeart className="wishlisticon" color="#c2c2c2" onClick={(e) => {
        e.stopPropagation();
          router.push("/login")}} />
        </div>
      }
    
    
    
    </div>
</div>


{
  prod.brandname == "abc" ?
  <p style={{marginBottom:"0",fontSize:"13px"}}>{prod.category.name}</p> :
  <p style={{marginBottom:"0",fontSize:"13px"}}>{prod.brandname}</p>
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
          <p className="card-title dibc" >&#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(prod.price))}</p>
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