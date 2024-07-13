'use client'

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Toaster, toast } from 'sonner'

export default function Loginhandle(){
    const cookies = new Cookies()
    const route = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [text,setText] = useState(false)
    const [isloading,setIsLoading] = useState(false)
    const [error,setError] = useState("")

    const passwordtext = () =>{
        setText(!text)
    }

    const googleAuth = () => {
      window.open(
        `${process.env.NEXT_PUBLIC_BASE_URL}auth/google`,
        "_self"
      );
    };

    const handleLogin = async () => {

        setIsLoading(true)
        if(email != "" && password != "") {
          try{
            const a = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"auth/login",{
              email : email,
              password : password
            })
            if(a.data.secureInfo.isVerified == false){
                toast.error("User Exist mail not verified!")
                route.push('/verify_mail')
            }
            else if(a.status == 200){
              cookies.remove("id")
              cookies.remove("access_token")
              cookies.set("access_token",a.data.token)
              cookies.set("name",a.data.secureInfo.name)
              route.push("/")
              toast.success("Logged in Successfully",{
                duration : 1000
              })
            }

        }catch(err:any){      
            setError(err.response.data.message)
            toast.error(err.response.data.message)
            setIsLoading(false)
        }  
        } 
        else{
          toast.error("Please Fill all the Fields")
          setIsLoading(false)
        } 
    }

    return <div>
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{borderRadius :"15px"}}>
              <div className="card-body p-4 md-5">
                <h3 className="mb-4 pb-2 pb-md-0 md-5">Login Form</h3>

                <div className="row">
                    <div className="col-md-12 mb-2 pb-2">
    
                      <div data-mdb-input-init className="form-outline">
                        <input type="mail" id="emailAddress" className="form-control form-control-lg" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
                      </div>
    
                    </div>

                    <div className="col-md-12 mb-2 pb-2">
                        <div data-mdb-input-init className="form-outline" style={{position:"relative"}}>
                            <input type={text ? "text" : "password"} id="emailAddress" className="form-control form-control-lg" placeholder="Password" style={{paddingRight : "50px"}} onChange={(e) => setPassword(e.target.value)} />
                        
                        <div className="eye" style={{position: "absolute",right: "20px",top:'10px'}}>
                            {text ? <FaEye size={25} onClick={passwordtext}/> : <FaEyeSlash  size={25} onClick={passwordtext}/>}
                        </div>
                        </div>
                      
                    </div>

                    
                </div>
                
    
    
                  <div className="mt-1 pt-2 mb-3">
                    <input data-mdb-ripple-init className="btn btn-primary btn-lg" type={"submit"} value={isloading ? "Loading" :"Login"} onClick={handleLogin} />
                  </div>
    
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                  <p>Don't have an account <a href="/signin">Signin</a> </p>
                  <a href="/forgot-password">Reset Password</a>
                  </div>

                  <button onClick={googleAuth}>Login with google</button>
    
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </div>

}