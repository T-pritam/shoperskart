"use client"
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"
import Cookies from "universal-cookie"
import axios from "axios"
import { toast } from "sonner"
import '../../../static/css/address.css'

export default function AddAddress(){
    const cookies = new Cookies()
    const router = useRouter()

    const [street,setStreet] = useState("")
    const [user,setUser] = useState("")
    const [city,setCity] = useState("")
    const [state,setState] = useState("")
    const [phone,setPhone] = useState("")
    const [postal,setPostal] = useState("")
    const [country,setCountry] = useState("India")
    const [addresstype,setAddressType] = useState("Home")
    const [address,setAddress] = useState<unknown[]>([])
    const [isloading,setIsLoading] = useState(false)
    const [err,setErr] = useState("")

    async function saveAddress(){
        try{
            const data = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"address",{
            user : cookies.get("access_token"),
            name : user,
            street : street,
            city : city,
            state : state,
            phoneNumber : phone,
            postalCode : postal,
            country : country,
            type : addresstype,
        })
        toast.success("Address Added")
        router.refresh()
        }
        catch(err:any){
            setErr(err.response.data.message)  
            toast.error(err.response.data.message)
        }
    }


    useEffect(() => {
        const getaddress = async () => {
            if(cookies.get("access_token")){
                const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"address/user/"+cookies.get("access_token"))
            setAddress(data.data)
            }
            else{
                router.push("/login")
            }
        }
        getaddress()
    },[])


    return <>
    <div className="addouter">
   <div className="addcontainer">
    
    <h4>Add New Address</h4> 
    <input type="text"  onChange={(e) => setUser(e.target.value)} className="addname" placeholder="Name" required/>
    <br />

    <input type="text"  onChange={(e) => setStreet(e.target.value)} className="addstreet" placeholder="Street" required/>
    <br />

    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <div>
    <input type="text" onChange={(e) => setCity(e.target.value)} className="addall" placeholder="City" required/>
    </div>
    <div>
    <input type="text" onChange={(e) => setState(e.target.value)} className="addall" placeholder="State" required/>
    </div>
    </div>


    <div style={{display:"flex",justifyContent:"space-evenly",margin:"1vw 0 1vw 0"}}>
    <div>
    <input type="text" onChange={(e) => setPhone(e.target.value)} className="addall" placeholder="Phone Number" required/>
    </div>
    <div>
    <input type="text" onChange={(e) => setPostal(e.target.value)} className="addall" placeholder="Postal Code" required/>
    </div>
    </div>

    <div style={{display:"flex",justifyContent:"space-evenly",margin:"1vw 0 1vw 0"}}>
    <div>
    <input type="text" onChange={(e) => setCountry(e.target.value)} className="addall" placeholder="India"/>
    </div>
    <div>
    <select name="" id="" className="addselect" onChange={(e) => {setAddressType(e.target.value)}}>
        <option value="">Adress Type</option>
        <option value="Home">Home</option>
        <option value="Bussiness">Office</option>
    </select>
    </div>
    </div>
  <button type="submit" className="addsavebtn b btn btn-dark"  style={{backgroundColor:"#467546"}} onClick={saveAddress}>Save Address</button>
    </div>
   </div>

    {
        address.map((prod:any) => (
            <div key={prod._id} className="addalldis">
                <div className="addallcontainer">
                    <div className="addalltype">
                        {
                            prod.type == 'Home' ?
                            <p>{prod.type}</p>:
                            <p>Work</p>
                        }
                    </div>
                    <h5 className="addallh5" style={{display:"inline-block"}}>{prod.name}</h5>
                    <h5  className="addallh5" style={{display:"inline-block",marginLeft:"5vh"}}>{prod.phoneNumber}</h5>
                    <h5 className="addallh5">{prod.street}</h5>
                    <div style={{display:"inline-block"}}>
                    <h5  className="addallh5" style={{display:"inline-block"}}>{prod.city}</h5>
                    <h5   className="addallh5" style={{display:"inline-block"}}>, {prod.state}</h5>
                    <h5  className="addallh5" style={{display:"inline-block"}}>, {prod.postalCode}</h5>
                    
                    </div>

                    <div className="addallbtn">
                    <button  type="button" className="addallbtnedit" id = "savebtnnn" style={{margin:"0 0",}} onClick={() =>{
                        router.push('/EditAddress/'+prod._id)
                    }} >Edit</button> 
                    <button  type="button" className="addallbtndel" id = "cancelbtnnn" onClick={async() => {
                        await axios.delete(process.env.NEXT_PUBLIC_BASE_URL+"address/"+prod._id)
                        toast.success("Address Deleted")
                        location.reload()
                    }}>Delete</button> 

                    </div>
                </div>
            </div>
        ))
    }
    
    </>
}