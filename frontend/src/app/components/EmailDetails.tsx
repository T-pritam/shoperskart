"use client"
import { useState,useEffect } from "react"
import Cookies from "universal-cookie"
import { useRouter } from "next/navigation"
import axios from "axios"
import '../../../static/css/profile.css'

export default function EmailDetails(props:any){
    const cookies = new Cookies()
    const [email,setEmail] = useState("")


    return<>
        <>
        <h2>Email</h2>
            <input type="text" name="" id="email" placeholder={props.profile?.email} onChange={(e) =>{ 
                const a = e.target.value == props.profile?.email ? props.profile?.email : e.target.value
                setEmail(a)
            }} className="EmailInput" disabled />
            <br />
            
<div style={{textAlign:"center",margin:"6vw 0 0 0"}}> 
            
            <a href="/forgot-password"><button  type="button" className="btn btn-dark" id="bt">Reset Password</button> </a>
            
            
            </div>
        </>

        
    </>
}