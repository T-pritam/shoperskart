"use client"
import axios from "axios"
import { useState,useEffect } from "react"
import Cookies from "universal-cookie";
import NavScrollExample from "@/app/components/Navbar"
import { IoStarSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from 'sonner'
import "../../../../static/css/rating.css"

export default function RateProduct({params}:
    {params :{
        id : string
    }}
)
{

    interface Products{
        id: number;
        thumbnail: string;
        _id : string;
        price : number;
        discountPercentage: number;
        title : string;
        brandname : string;

      }

    const router = useRouter()
    const cookies = new Cookies()
    const [reviewProduct,setReviewProduct] = useState<Products>({
        id: 0,
        thumbnail: "",
        _id : "",
        price : 0,
        discountPercentage: 0,
        title : "",
        brandname : "",
    })
    const [review,setReview] = useState<unknown[]>([])
    const [reviewText,setReviewText] = useState("")
    const [rating,setRating] = useState(0)
    const [ratingType,setRatingType] = useState("")
    const [reviewAvailable,setReviewAvailable] = useState(false)

    useEffect(() => {
        const getRating = async () => {
            if(!cookies.get("access_token")){
                router.push('/')
            }
            const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+`review/product/${cookies.get("access_token")}/${params.id}`)
              
            if (data.data.totalDocs == 1){
                setReview(data.data.result._id)
                setReviewText(data.data.result.comment)
                setReviewProduct(data.data.result.product) 
                setReviewAvailable(true)
                setRating(data.data.result.rating)
                setRating2(data.data.result.rating)
            }
            else{
                const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"products/get/"+params.id)
                setReviewProduct(data.data)
            }
        }
        getRating()
        
    },[])

    function setRating2(getrating:any){
        var a = document.getElementsByClassName('2')
        if(a!=null){
            for (let i = 0; i < a.length; i++) {
                if(i < getrating){
                    (a[i] as HTMLElement).style.color = "#ffe11b"
                }
                else{
                    (a[i] as HTMLElement).style.color = "#ddd"
                }  
             }
             switch(getrating){
                case 1:
                    setRatingType("Very Bad")
                    break;
                case 2:
                    setRatingType("Bad")
                    break;
                case 3:
                    setRatingType("Good")
                    break;
                case 4:
                    setRatingType("Very Good")
                    break;
                case 5:
                    setRatingType("Excellent")
                    break;
             }
        }                  
    }

    return <div>
        
        <NavScrollExample  />
        <div style={{ margin: "50px 0vw 0vw 0vw" }}>
            <div className="outerbox">
            <div className="pagetit">
                <h2>Product Review</h2>
            </div>
                <div className="displayflex" onClick={() =>{
                    router.push("/product/"+reviewProduct?._id)
                }}>
                <img src={reviewProduct?.thumbnail} className="rateimg"  alt="" />
                <div>
                    <p className="ratetit">{reviewProduct?.title}</p>
                    <p className="ratebrand">{reviewProduct?.brandname}</p>
                    <p className="rateprice">Price : &#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(reviewProduct?.price - (reviewProduct?.price * reviewProduct?.discountPercentage)/100))}</p>    
                </div>
                </div>
                <div className="flexrating">
                <div className="dibb" style={{margin:"auto"}}>
                        <div>
                        <IoStarSharp size={"50px"} color="#ddd" className="2 r2" onClick={() => {
                            setRating(1)
                            setRating2(1)
                        }}/>
                        <IoStarSharp color="#ddd" size={"50px"} className="2 r2" onClick={() => {
                            setRating(2)
                            setRating2(2)
                        }}/>
                        <IoStarSharp color="#ddd" size={"50px"} className="2 r2" onClick={() => {
                            setRating(3)
                            setRating2(3)
                        }}/>
                        <IoStarSharp color="#ddd" size={"50px"} className="2 r2" onClick={() => {
                            setRating(4)
                            setRating2(4)
                        }}/>
                        <IoStarSharp color="#ddd" size={"50px"} className="2 r2" onClick={() => {
                            setRating(5)
                            setRating2(5)
                        }}/>
                        </div>
                    <div className="ratingtype">
                        {
                            ratingType == "Very Bad" ? (<p style={{color:"red"}}>{ratingType}</p>) : ratingType == "Bad" ? <p style={{color:"orange"}}>{ratingType}</p> :<p style={{color:"green"}}>{ratingType}</p>
                        }
                    </div>
                </div>
                
                <div style={{margin:"auto"}}>
                    <textarea className="textarearat" rows={6} placeholder="Review" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
                        
                </div>
                </div>
                <div style={{textAlign:"center"}}>
                    {
                        reviewAvailable == true ?
                        <button type="button" className="submitbtn" onClick={async() => {
                            toast.success("Your rating has been saved")
                                await axios.patch(process.env.NEXT_PUBLIC_BASE_URL+"review/"+review,{
                                rating: rating,
                                comment: reviewText})
                            
                            
                            }}>Update</button> :
                        <button type="button" className="submitbtn" onClick={async() => {
                            if(rating == 0){
                                toast.error("Star Rating is Required")
                            }
                            else{
                                await axios.post(process.env.NEXT_PUBLIC_BASE_URL+"review/",{
                                user : cookies.get("access_token"),
                                product : params.id,
                                rating: rating,
                                comment: reviewText
                            })
                            toast.success("Your rating has been saved")
                            router.refresh()
                            }
                        }}>Submit</button>
                    }
                    
                </div>
                </div>
                
            </div>
        </div>

}