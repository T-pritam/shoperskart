"use client"
import axios from "axios";
import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { toast } from 'sonner'

export default function HandleOtp(){
    const cookie = new Cookies()
    const router = useRouter()
    const initialized = useRef(false)

    useEffect(() => {
        var btn = document.getElementById("resend") as HTMLInputElement
        btn.disabled = true
        var timertext = document.getElementById("pp") as HTMLInputElement

        var time = 20
        var timer = setInterval(settimer,1000)

        function settimer(){
            {
                if(time > 0){
                    timertext.textContent = `Resend in ${time}`
                }
                else{
                    timertext.textContent = ""
                    btn.disabled = false
                    clearInterval(timer)
                }
                time--;
            }
        }


        const sendotp = async() => {
            if(cookie.get("id") != undefined){
                axios.defaults.headers.common['id'] = cookie.get('id');
                await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"auth/resend-otp") 
                toast.success("Email sent for verification")
            }
            else{
                router.push('/signin')
            }    
        }

        if (!initialized.current) {
            initialized.current = true
            try{
                sendotp()
            }
            catch(err:any){
                router.push('/signin')
            }
          }    
        
    },[])

    const [otp,setotp] = useState("")
    const [isloading,setIsLoading] = useState(false)

    const handleOTP = async () => {
        setIsLoading(true)
        try{
            axios.defaults.headers.common['id'] = cookie.get('id');
            const a = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+'auth/verify-otp',{
                otp : otp
            })
            cookie.set('access_token',a.data)
            cookie.remove('id')
            if(a.status === 200){
                toast.success("OTP Verfied")
                router.push('/login')
        }
        }
        catch(err:any){
            toast.error(err.response.data.message)
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
                    <h3 className="mb-4 pb-1 pb-md-0 md-5">Verify OTP</h3>
    
                    <div className="row">
                        <div className="col-md-12 mb-2 pb-2">
        
                          <div data-mdb-input-init className="form-outline">
                            <input type="mail" id="emailAddress" className="form-control form-control-lg" placeholder="Enter OTP"  onChange={(e) => setotp(e.target.value)} />
                          </div>
        
                        </div>
                        
                    </div>
                      <div className="mt-1 pt-2  d-flex justify-content-between">
                        <div>
                        <input data-mdb-ripple-init className="btn btn-primary btn-lg" type={"submit"} value={isloading ? "Loading" :"Submit"} onClick={handleOTP} />
                        </div>
                        <div>
                        <a href="/Verify-otp"><input data-mdb-ripple-init className="btn btn-primary btn-lg" id="resend" type={"submit"} value={"Resend OTP"} /></a>
                        <p id="pp"></p>
                        </div>
                      </div>
        
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        </div>
    
}