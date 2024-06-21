"use client"
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Cookies from "universal-cookie"
import NavScrollExample from "../components/Navbar"
import ProfileDetails from "../components/profiledetalis"
import PhoneDetails from "../components/PhoneDetails"
import EmailDetails from "../components/EmailDetails"
import AddressDetails from "../components/addressdetails"
import '../../../static/css/profile.css'



export default function Profile(){
    const cookies = new Cookies()
    const router = useRouter()
    const [profile,setProfile] = useState<unknown[]>([])

    useEffect(() => {
        const getProfile = async () => {
            if(cookies.get("access_token")){
                const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'user/get/'+cookies.get("access_token"))
            // const address = await axios.get("http://localhost:8000/user/"+cookies.get("access_token"))
            setProfile(data.data)
            }
            else{
                router.push("/login")
            }
        }
        getProfile()
    },[])

    return <div style={{marginTop:"50px"}}>
    <NavScrollExample />
    <div className="maindiv">
        <div className="eachbox"><ProfileDetails profile = {profile}/></div>
        <div className="eachbox"><PhoneDetails profile = {profile} /></div>
        <div className="eachbox"><EmailDetails profile = {profile} /></div>
    
    
    
    <AddressDetails />
    </div>
    <a href="/address"><button type="button" className="btn btn-dark" style={{backgroundColor:"#467546",textAlign:"center"}}>Address</button></a>

    
    </div>
}