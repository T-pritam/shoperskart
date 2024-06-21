"use client"
import { useState,useEffect } from "react"
import Cookies from "universal-cookie"
import axios from "axios"
import NavScrollExample from "@/app/components/Navbar"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import "../../../../static/css/editaddress.css"

export default function EditAdress({params}:
    {params :{
        id: string
    }}){
    const cookies = new Cookies()
    const router = useRouter()

    const [street,setStreet] = useState("")
    const [city,setCity] = useState("")
    const [state,setState] = useState("")
    const [phone,setPhone] = useState("")
    const [postal,setPostal] = useState("")
    const [country,setCountry] = useState("India")
    const [addresstype,setAddressType] = useState("")
    const [name,setName] = useState("")
    const [address,setAddress] = useState<unknown[]>([])
    const [isloading,setIsLoading] = useState(false)
    const [err,setErr] = useState("")

    useEffect(()=>{

        const getAddress = async() =>{
            if(!cookies.get("access_token")){
                router.push("/login")
            }
            const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"address/"+params.id)
            setAddress(data.data)
            setName(data.data.name)
            setStreet(data.data.street)
            setCity(data.data.city)
            setState(data.data.state)
            setPhone(data.data.phoneNumber)
            setPostal(data.data.postalCode)
            setCountry(data.data.country)
            setAddressType(data.data.type)
        }
        getAddress() 
    },[])
    return <div style={{marginTop:"50px"}}>
    <NavScrollExample />
    
    <div className="editcontainer">
    <h4>Add New Address</h4> 
    <input type="text"  onChange={(e) => setName(e.target.value)} className="addname" value={name} placeholder="User Name" required/>
    <br />
    <input type="text"  onChange={(e) => setStreet(e.target.value)} className="addstreet" value={street} placeholder="Street" required/>
    <br />

    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <div>
    <input type="text" onChange={(e) => setCity(e.target.value)} className="addall" value={city} placeholder="city" required/>
    </div>
    <div>
    <input type="text" onChange={(e) => setState(e.target.value)} value={state} className="addall" placeholder="state" required/>
    </div>
    </div>


    <div style={{display:"flex",justifyContent:"space-evenly",margin:"1vw 0 1vw 0"}}>
    <div>
    <input type="text" onChange={(e) => setPhone(e.target.value)} className="addall" value={phone} placeholder="phone" required/>
    </div>
    <div>
    <input type="text" onChange={(e) => setPostal(e.target.value)} value={postal} className="addall" placeholder="postal" required/>
    </div>
    </div>

    <div style={{display:"flex",justifyContent:"space-evenly",margin:"1vw 0 1vw 0"}}>
    <div>
    <input type="text" onChange={(e) => setCountry(e.target.value)} className="addall" value={country} placeholder="country" />
    </div>
    <div>
    <select name="" id="" className="addselect" value={addresstype} onChange={(e) => {setAddressType(e.target.value)}}>
        <option value="Bussiness">Office</option> 
        <option value="Home">Home</option>
        
    </select>
    </div>
    </div>
  <button type="button" className="editaddbtn btn btn-dark" style={{backgroundColor:"#467546"}} onClick={async() =>{
    await axios.patch(process.env.NEXT_PUBLIC_BASE_URL+"address/"+params.id,{
            name : name,
            street : street,
            city : city,
            state : state,
            phoneNumber : phone,
            postalCode : postal,
            country : country,
            type : addresstype,
    })
    toast.success("Address Updated")
    setTimeout(() => {
        router.push("/address")
    }, 1000);
  }} >Update Address</button>
  <a href="/address"><button type="button" className="editaddbtn btn btn-dark" style={{backgroundColor:"#467546"}}>Add New Address</button></a>
   </div>

    </div>

}