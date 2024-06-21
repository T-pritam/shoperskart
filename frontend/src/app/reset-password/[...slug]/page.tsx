"use client"
import axios from "axios";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import {toast} from 'sonner'
export default function ResetHandler({params}:
    {params :{
        slug: string[]
    }}
)
{
    const cookie = new Cookies()
    const router = useRouter()

    const [pass,setpass] = useState("")

    const handleOTP = async () => {
      if(pass == ''){
        toast.error("Please Provide Password")
      }
      else{
        try{
          const a = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"auth/reset-password",{
          'user':params.slug[0],
          'password':pass,
          'token': params.slug[1]
          })
      if(a.status === 200){
          toast.success("Password Reset Successfully")
          router.push('/login')
      }
      }
      catch(err:any){
          toast.error(err.response.data.message)
      }
      }
        
    }

    return <>
        <div>
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
                        <input type="password" id="emailAddress" className="form-control form-control-lg" placeholder="Password"  onChange={(e) => setpass(e.target.value)} />
                      </div>   
                    </div>
                </div>                        
                <div className="mt-1 pt-2">
                    <input data-mdb-ripple-init className="btn btn-primary btn-lg" type={"submit"} value={"Change Password"} onClick={handleOTP} />
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</>
}
