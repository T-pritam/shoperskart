'use client'

import axios from "axios"
import { Span } from "next/dist/trace"
import { cookies } from "next/headers"
import { useRouter } from "next/navigation"
import { useState,useRef } from "react"
import Cookies from "universal-cookie"
import {toast} from 'sonner'


export default function SigninForm(){
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [isloading,setIsLoading] = useState(false)
    const [error,setError] = useState("")
    const [link,setLink] = useState("")
    const [resetbutoon,setResetButton] = useState(false)
    const initialized = useRef(false)


    const handleSignin = async () => {
        const cookies = new Cookies();
        setIsLoading(true)
        try{
            const a = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"auth/forgot-password",{
                email : email
            })
            toast.success("Password Reset mail Sent")
            setIsLoading(false)

    }
        catch(err:any){
            setIsLoading(false)
            toast.error(err.response.data.message)
            setError(err.response.data.message)
        }
    }

    return <div>
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{borderRadius :"15px"}}>
              <div className="card-body p-4 md-5">
                <h3 className="mb-4 pb-2 pb-md-0 md-5">Password Reset Form</h3>

                <div className="row">
                    <div className="col-md-12 mb-2 pb-2">
    
                      <div data-mdb-input-init className="form-outline">
                        <input type="mail" id="emailAddress" className="form-control form-control-lg" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} />
                      </div>
    
                    </div>

                    
                </div>
                
    
    
                  <div className="mt-1 pt-2">
                    <input data-mdb-ripple-init className="btn btn-primary btn-lg" type={"submit"} value={isloading ? "Loading" :"Reset password"} onClick={handleSignin} />
                  </div>
    
                  <p>Don't have an account <a href="/signin">Signin</a> </p>
    
            </div>
          </div>
  
          {resetbutoon ? <a href={link} target="_blank">Reset Link</a> : ""}
        </div>
      </div>
      </div>
    </section>
    </div>
}