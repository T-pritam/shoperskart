"use client"
import { useState,useEffect } from "react"
import Cookies from "universal-cookie"
import { useRouter } from "next/navigation"
import axios from "axios"
import '../../../static/css/profile.css'

export default function PhoneDetails(props:any){
    const cookies = new Cookies()
    const [phone,setphone] = useState("")
    
    function handleProfileEdit(){
        var btn = document.getElementById("btnn") as HTMLInputElement
        var first = document.getElementById("phone") as HTMLInputElement
        var savebtn = document.getElementById("savebtnn") as HTMLInputElement
        var cancelbtn = document.getElementById("cancelbtnn") as HTMLInputElement

        first.disabled = false

        first.value = first.placeholder

        btn.style.display = "none"
        savebtn.style.display = "initial"
        cancelbtn.style.display = "initial"

        setphone(props.profile?.phone)
    }
    function handleProfileCancel(){
        var btn = document.getElementById("btnn") as HTMLInputElement
        var savebtn = document.getElementById("savebtnn") as HTMLInputElement
        var cancelbtn = document.getElementById("cancelbtnn") as HTMLInputElement
        var first = document.getElementById("phone") as HTMLInputElement

        first.disabled = true

        btn.style.display = "initial"
        savebtn.style.display = "none"
        cancelbtn.style.display = "none"
    }
    async function handleProfileSave(){
        const data = await axios.patch(process.env.NEXT_PUBLIC_BASE_URL+"user/update/"+cookies.get("access_token"),{
            phone : phone,
        })
        var btn = document.getElementById("btnn") as HTMLInputElement
        var savebtn = document.getElementById("savebtnn") as HTMLInputElement
        var cancelbtn = document.getElementById("cancelbtnn") as HTMLInputElement
        var first = document.getElementById("phone") as HTMLInputElement

        btn.style.display = "initial"
        savebtn.style.display = "none"
        cancelbtn.style.display = "none"

        first.disabled = true
    }


    return<>
        <>
        <h2>Phone</h2>
            <input type="text" name="" id="phone" placeholder={props.profile?.phone} onChange={(e) =>{ 
                const a = e.target.value == props.profile?.phone ? props.profile?.phone : e.target.value
                setphone(a)
            }} className="phoneDetails" disabled />
            <br />
            
<div style={{textAlign:"center",margin:"6vw 0 0 0"}}> 
            <button  type="button" className="btn btn-dark" id = "btnn" onClick={handleProfileEdit}>Edit</button> 
            <button  type="button" className="btn btn-dark" id = "savebtnn" onClick={handleProfileSave} style={{display:"none",margin:"0 20px 0",}} >Save</button> 
            <button  type="button" className="btn btn-dark" id = "cancelbtnn" onClick={handleProfileCancel} style={{display:"none"}}>Cancel</button> 
            </div>
        </>
    </>
}