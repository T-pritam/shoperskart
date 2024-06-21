"use client"
import { useState,useEffect } from "react"
import Cookies from "universal-cookie"
import { useRouter } from "next/navigation"
import axios from "axios"
import '../../../static/css/profile.css'


export default function ProfileDetails(props:any){
    const cookies = new Cookies()
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [gender,setgender] = useState("")

    function handleProfileEdit(){
        var btn = document.getElementById("btn") as HTMLInputElement
        var first = document.getElementById("first") as HTMLInputElement
        var last = document.getElementById("last") as HTMLInputElement
        var savebtn = document.getElementById("savebtn") as HTMLInputElement
        var cancelbtn = document.getElementById("cancelbtn") as HTMLInputElement
        var flexRadio1 = document.getElementById("radiogender0") as HTMLInputElement
        var flexRadio2 = document.getElementById("radiogender1") as HTMLInputElement

        first.disabled = false
        last.disabled = false

        first.value = first.placeholder
        last.value = last.placeholder

        flexRadio1.disabled = false
        flexRadio2.disabled = false

        btn.style.display = "none"
        savebtn.style.display = "initial"
        cancelbtn.style.display = "initial"

        setFirstName(props.profile?.firstname)
        setLastName(props.profile?.lastname)
    }
    function handleProfileCancel(){
        var btn = document.getElementById("btn") as HTMLInputElement
        var savebtn = document.getElementById("savebtn") as HTMLInputElement
        var cancelbtn = document.getElementById("cancelbtn") as HTMLInputElement
        var first = document.getElementById("first") as HTMLInputElement
        var last = document.getElementById("last") as HTMLInputElement
        var flexRadio1 = document.getElementById("radiogender0") as HTMLInputElement
        var flexRadio2 = document.getElementById("radiogender1") as HTMLInputElement

        first.disabled = true
        last.disabled = true

        btn.style.display = "initial"
        savebtn.style.display = "none"
        cancelbtn.style.display = "none"

        flexRadio1.disabled = true
        flexRadio2.disabled = true

    }
    async function handleProfileSave(){
        var flexRadio1 = document.getElementById("radiogender0") as HTMLInputElement
        var flexRadio2 = document.getElementById("radiogender1") as HTMLInputElement
        const data = await axios.patch(process.env.NEXT_PUBLIC_BASE_URL+"user/update/"+cookies.get("access_token"),{
            firstname : firstname,
            lastname : lastname,
            Gender : gender
        })
        cookies.set("name",firstname)
        var btn = document.getElementById("btn") as HTMLInputElement
        var savebtn = document.getElementById("savebtn") as HTMLInputElement
        var cancelbtn = document.getElementById("cancelbtn") as HTMLInputElement
        var first = document.getElementById("first") as HTMLInputElement
        var last = document.getElementById("last") as HTMLInputElement

        btn.style.display = "initial"
        savebtn.style.display = "none"
        cancelbtn.style.display = "none"

        first.disabled = true
        last.disabled = true

        flexRadio1.disabled = true
        flexRadio2.disabled = true

     
    }


    return<>
        <h2 style={{textAlign:"center"}}>Personal Info</h2>
            <input type="text" name="" id="first" placeholder={props.profile?.firstname} onChange={(e) =>{ 
                const a = e.target.value == props.profile?.firstname ? props.profile?.firstname : e.target.value
            
                setFirstName(a)
            }} className="profileInfo"  disabled />
            <input type="text" name="" id="last" placeholder={props.profile?.lastname} onChange={(e) =>{
                const a = e.target.value == props.profile?.lastname ? props.profile?.lastname : e.target.value
                setLastName(a)

            }} className="profileInfo" disabled />
            <br />
            <div style={{margin:"0 0 0 15px"}}>
            Gender : {gender}
            
            <div className="">
<input  type="radio" name="flexRadio" id="radiogender0" value='Male' onChange={(e) => setgender(e.target.value)}/> 
    Male
  
</div>
<div className="">
  <input type="radio" name="flexRadio" id="radiogender1" value="Female" onChange={(e) => setgender(e.target.value)} disabled/>
    Female
  
</div>
                
            </div>
<div style={{textAlign:"center"}}> 
            <button  type="button" className="btn btn-dark" id = "btn" onClick={handleProfileEdit}>Edit</button> 
            <button  type="button" className="btn btn-dark" id = "savebtn" onClick={handleProfileSave} style={{display:"none",margin:"0 20px 0",}} >Save</button> 
            <button  type="button" className="btn btn-dark" id = "cancelbtn" onClick={handleProfileCancel} style={{display:"none"}}>Cancel</button> 
            
            
            </div>
    </>
}