"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "universal-cookie";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Toaster,toast } from 'sonner'

export default function SigninForm() {
  const router = useRouter();
  const cookies = new Cookies();

  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [passCon, setPassCon] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState(false);
  const [textC, setTextC] = useState(false);

  const passwordtext = () => {
    setText(!text);
  };

  const passwordtextC = () => {
    setTextC(!textC);
  };

  const handleSignin = async () => {
    setIsLoading(true);
    if (email == "" || firstname == "" || pass == "" || passCon == "") {
      toast.error("Please Fill the Form", {
        duration: 2000
        });
  
      setIsLoading(false)
    } else {
      const data = {
        firstname,
        lastname,
        email,
        password: pass,
        phone,
      };
      try {
        const a = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"auth/signup", data);

        if (a.status == 201) {
          toast.success("User Created")
          cookies.remove("access_token");
          cookies.set("id", a.data);
          router.push("/Verify-otp");
        }
      } catch (err: any) {
        setIsLoading(false);
        toast.error(err.response.data.message, {
          duration: 2000
          });
        if(err.response.data.message == "User already exists but Email not verified"){
          router.push("/verify_mail")
        }
      }
    }
  };

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
                    <h3 className="mb-4 pb-1 pb-md-0 md-5">
                      Registration Form
                    </h3>

                    <div className="row">
                      <div className="col-md-6 mb-2 pb-1">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            onChange={(e) => {
                              setfirstName(e.target.value);
                            }}
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-2 pb-1">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            onChange={(e) => setlastName(e.target.value)}
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-2 pb-1">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-2 pb-1">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="tel"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-2 pb-1">
                        <div data-mdb-input-init className="form-outline" style={{position:"relative"}}>
                          <input
                            type={text ? "text" : "password"}
                            id="emailAddress"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            style={{ paddingRight: "50px" }}
                            onChange={(e) => setPass(e.target.value)}
                          />
                          <div
                            style={{
                              position: "absolute",
                              right:"10px",
                              top:"10px"
                            }}
                          >
                            {text ? (
                              <FaEye size={25} onClick={passwordtext} />
                            ) : (
                              <FaEyeSlash size={25} onClick={passwordtext} />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2 pb-1">
                        <div data-mdb-input-init className="form-outline" style={{position:"relative"}}>
                          <input
                            type={textC ? "text" : "password"}
                            id="emailAddress"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                            style={{ paddingRight: "50px" }}
                            onChange={(e) => {
                              setPassCon(e.target.value);
                              if (
                                pass != e.target.value &&
                                e.target.value != ""
                              ) {
                                setError("Password is not matchig");
                              } else {
                                setError("");
                              }
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              right:"10px",
                              top:"10px"
                            }}
                          >
                            {textC ? (
                              <FaEye size={25} onClick={passwordtextC} />
                            ) : (
                              <FaEyeSlash size={25} onClick={passwordtextC} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {error}
                    <div className="mt-1 pt-2">
                      <input
                        data-mdb-ripple-init
                        className="btn btn-primary btn-lg"
                        type={"submit"}
                        value={isloading ? "Loading" : "Submit"}
                        onClick={handleSignin}
                      />
                    </div>

                    <p>
                      Already have an account <a href="/login">Login</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }