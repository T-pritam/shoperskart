"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "universal-cookie";
import { IoIosArrowDown } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import axios from "axios";
import { IoIosHeartEmpty } from "react-icons/io";
import Searchcard from "../components/searchCards";
import { MdLogout } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { toast } from 'sonner'

import './a.css'

function NavScrollExample(props:any) {
    const cookie = new Cookies()
    const router = useRouter()
    const [user, setUser] = useState("")
    const [auth, setAuth] = useState(false)
    const [profileImge,setProfileImage] = useState("")
    const [searchprod, setSeachProd] = useState<any[]>([])
    
    useEffect(() => {
      async function getUser(){
        const a = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}user/get/all/${token}`)
        console.log(a.data)
        cookie.set("access_token",a.data.token)
        cookie.set("name",a.data.secureInfo.name.split(" ")[0])
        cookie.set("profileImage",a.data.secureInfo.profileImage)
        if (cookie.get("access_token") && cookie.get("name")) {
          setAuth(true)
          setUser(cookie.get("name"))
          if(cookie.get("profileImage") != ""){
            setProfileImage(cookie.get("profileImage"))
          }
          else{
            setProfileImage("data:image/png;base64,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")
          }
          }
          router.refresh()

      }
      const token = props.token
      if(token){
        getUser()
      }
      else{
        if (cookie.get("access_token") && cookie.get("name")) {
          setAuth(true)
          setUser(cookie.get("name"))
          if(cookie.get("profileImage") != ""){
            setProfileImage(cookie.get("profileImage"))
          }
          else{
            setProfileImage("data:image/png;base64,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")
          }
          }
      }
    }, [])

    async function logout() {
      cookie.remove("access_token")
      cookie.remove("name")
      cookie.remove("profileImage")
      const a = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"auth/logout")
      setAuth(false)
      router.push('/login')
    }

    return <div>
        
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"darkseagreen",padding:"7px 12px 4px 12px",position:"fixed",width:"100%",zIndex:"5",top:"0"}}>
  <div className="container-fluid">
  <img className="logo" src="https://shopperskart.info/cdn/shop/files/ShopperKart_785_x_500_px_1200_x_500_px_1400_x_500_px_2.png?v=1668198224&width=400"  onClick={() => router.push("/")} alt="" />
    


  <input className="form-controll me-2 search-barr aaa" type="search" onChange={async (e) => {
              if(e.target.value == ""){
                setSeachProd([])
              }
              else{  
              try {
                const data = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"products/get", {
                  search: e.target.value
                })
                setSeachProd(data.data)
              }
              catch (error) {
                console.log(error)
              }
            }}} placeholder="Search" aria-label="Search" />

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {
          auth ? <div>
            <li className="nav-item logo-login">
              <img className="logo" src="https://shopperskart.info/cdn/shop/files/ShopperKart_785_x_500_px_1200_x_500_px_1400_x_500_px_2.png?v=1668198224&width=400"  onClick={() => router.push("/")} alt="" />
              </li>
            <li className="nav-item dib cart" >
        <button style={{background:"transparent",border:"0"}} onClick={()=> router.push('/cart')}>
        <MdOutlineShoppingCart  size={"33px"} style={{position:"relative"}}/>
              <p style={{display:"inline-block",margin:"0 0 0 7px",fontSize:"20px"}}>Cart</p>
        </button>
        </li>
        <li className="nav-item dropdown dib user">
        <nav className="dropdown" >
          <div className="userbtn" style={{border:"1px solid black",borderRadius:"10px",padding:"0 7px 0 7px"}} onMouseOver={() => {
            var a = document.getElementById('icon') as HTMLInputElement
            a.style.transform = "rotate(180deg)"
            a.style.transition = "transform .2s ease";
          }} onMouseOut={()=>{
            var a = document.getElementById('icon') as HTMLInputElement
            a.style.transform = "rotate(0deg)"
            a.style.transition = "transform .2s ease";
            
          }}
          >
            <img className="nav-link dropbtn" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"30px",borderRadius:"20px",display:"inline-block",marginTop:"5px",padding:"0"}} onClick={() => router.push('/profile')} src={profileImge} alt="" />
            <p style={{display:"inline-block",fontSize:"20px",fontWeight:"500",margin:"0 0 0 7px",paddingTop:"3px"}}>{user}</p>
            <div style={{display:"inline-block",marginLeft:"5px"}}>
            <IoIosArrowDown id="icon" />
            </div>
          </div>
            <nav className="dropdown-content" style={{width:"160px",fontSize:"16px"}} onMouseOver={()=>{
              var a = document.getElementById('icon') as HTMLInputElement
              a.style.transform = "rotate(180deg)"
              a.style.transition = "transform .2s ease";
            }}
            onMouseOut={()=>{
              var a = document.getElementById('icon') as HTMLInputElement
              a.style.transform = "rotate(0deg)"
              a.style.transition = "transform .2s ease";
            }}
            >
                    <a href="/profile"><FaRegUserCircle size={"20px"} style={{margin:"0 10px 3px 10px"}}/>My Profile</a>
                    <a href={"/wishlist"}><IoIosHeartEmpty size={"20px"} style={{margin:"0 10px 3px 10px"}}/>Wishlist</a>
                    <a href="/order"><FaBoxOpen size={"20px"} style={{margin:"0 10px 3px 10px"}}/>Orders</a>
                    <a onClick={logout}><MdLogout size={"20px"} style={{margin:"0 10px 3px 10px"}}/>Logout</a>
                  </nav>
                  </nav>
        </li>
          </div>:
            <div>

              <li className="nav-item">
              <img className="logo logo-login" src="https://shopperskart.info/cdn/shop/files/ShopperKart_785_x_500_px_1200_x_500_px_1400_x_500_px_2.png?v=1668198224&width=400"  onClick={() => router.push("/")} alt="" />
              </li>
              <li className="nav-item logindiv">
            <button style={{background:"transparent",border:"0"}} className="cart" onClick={()=> router.push('/cart')}>
            <MdOutlineShoppingCart  size={"33px"} style={{position:"relative"}}/>
                  <p style={{display:"inline-block",margin:"0 0 0 7px",fontSize:"20px"}}>Cart</p>
            </button>
            </li>
            <li className="nav-item logindiv">
        <button className="login" style={{background:"transparent",border:"0"}} onClick={()=> router.push('/login')}>
              <p style={{display:"inline-block",margin:"0 0 0 7px",fontSize:"20px"}}>Login</p>
        </button>
        </li>
            </div>
          
        }
      </ul>
    </div>
  </div>
</nav>
<div className="searchResult aaa">
      {

        searchprod != null ? (searchprod.map((prod:any) => (
          <Searchcard key={prod._id} product={prod} />
        ))) : (<> </>)
      }
    </div>
    </div>
    

}
export default NavScrollExample;