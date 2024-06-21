"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { toast } from "sonner"

export default function VerifyEmail(){
    const [mail,setMail] = useState("")
    const [erro,setErro] = useState("")
    const router = useRouter()
    const cookies = new Cookies()


    async function verify() {
        try {
          const user = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"user/get", {
            email: mail,
          });
          cookies.set("id", user.data);
          router.push("/Verify-otp");
        } catch (err: any) {
          toast.error(err.response.data.message)
        }
      }


    return (
        <div>
            <section className="vh-100 gradient-custom">
              <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-12 col-lg-9 col-xl-7">
                    <div
                      className="card shadow-2-strong card-registration"
                      style={{ borderRadius: "15px" }}
                    >
                      <div className="card-body p-4 md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 md-5">
                          Verify Email
                        </h3>
  
                        <div className="row">
                          <div className="col-md-12 mb-2 pb-2">
                            <div data-mdb-input-init className="form-outline">
                              <input
                                type="mail"
                                id="emailAddress"
                                className="form-control form-control-lg"
                                placeholder="Email"
                                onChange={(e) => setMail(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-1 pt-2">
                          <input
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                            type={"submit"}
                            value={"verify"}
                            onClick={verify}
                          />
                        </div>
  
                        <p>
                          Don't have an account <a href="/signin">Signin</a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  {erro}
                </div>  
              </div>
            </section>
          </div>
      );
}