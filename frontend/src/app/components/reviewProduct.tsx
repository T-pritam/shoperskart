"use client"
import axios from "axios"
import { headers } from "next/headers";
import { useState,useEffect } from "react"
import { IoStarSharp } from "react-icons/io5";
import '../../../static/css/home.css'

export default function ReviewProduct(props:any){
    const [reviews,setReviews] = useState<unknown[]>([])
    const [total,setTotal] = useState(0)
    const [totalRatings,setTotalRating] = useState(0)
    const [rating1,setRating1] = useState(0)
    const [rating2,setRating2] = useState(0)
    const [rating3,setRating3] = useState(0)
    const [rating4,setRating4] = useState(0)
    const [rating5,setRating5] = useState(0)
    const [ratingAvg,setRatingAvg] = useState(0)
    const [largest,setLargest] = useState(0)
    const [largestIndex,setLargestIndex] = useState(0)

    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
        ];
    
useEffect(() => {
    const getReviews = async() => {
        const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+`review/product/${props.id}`)
        setReviews(data.data.result)
        setTotal(data.data.totalDocs)
        setTotalRating(data.data.count)
        setRating1(data.data.ratings[1])
        setRating2(data.data.ratings[2])
        setRating3(data.data.ratings[3])
        setRating4(data.data.ratings[4])
        setRating5(data.data.ratings[5])
        setRatingAvg(data.data.ratings[0])
        setLargest(data.data.ratings[6])
        setLargestIndex(data.data.ratings[7])
    }
    getReviews()
},[])

useEffect(() => {


        var range1 = document.getElementById("range1") as HTMLInputElement
        var range2 = document.getElementById("range2") as HTMLInputElement
        var range3 = document.getElementById("range3") as HTMLInputElement
        var range4 = document.getElementById("range4") as HTMLInputElement 
        var range5 = document.getElementById("range5") as HTMLInputElement

        if(largestIndex== 5){
            range5.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${100}% , #ddd ${100}%, #ddd 100%)`
            range1.style.background = `linear-gradient(to right, #ff6161 0%, #ff6161 ${(rating1 / largest) * 100}% , #ddd ${(rating1 / largest) * 100}%, #ddd 100%)`
            range2.style.background = `linear-gradient(to right, #ff9f00 0%, #ff9f00 ${(rating2 / largest) * 100}% , #ddd ${(rating2 / largest) * 100}%, #ddd 100%)`
            range3.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating3 / largest) * 100}% , #ddd ${(rating3 / largest) * 100}%, #ddd 100%)`
            range4.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating4 / largest) * 100}% , #ddd ${(rating4 / largest) * 100}%, #ddd 100%)`
        }
        
        if(largestIndex== 4){
            range4.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${100}% , #ddd ${100}%, #ddd 100%)`
            range1.style.background = `linear-gradient(to right, #ff6161 0%, #ff6161 ${(rating1 / largest) * 100}% , #ddd ${(rating1 / largest) * 100}%, #ddd 100%)`
            range2.style.background = `linear-gradient(to right, #ff9f00 0%, #ff9f00 ${(rating2 / largest) * 100}% , #ddd ${(rating2 / largest) * 100}%, #ddd 100%)`
            range3.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating3 / largest) * 100}% , #ddd ${(rating3 / largest) * 100}%, #ddd 100%)`
            range5.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating5 / largest) * 100}% , #ddd ${(rating5 / largest) * 100}%, #ddd 100%)`
        }
        
        if(largestIndex== 3){
    
            range3.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${100}% , #ddd ${100}%, #ddd 100%)`
            range1.style.background = `linear-gradient(to right, #ff6161 0%, #ff6161 ${(rating1 / largest) * 100}% , #ddd ${(rating1 / largest) * 100}%, #ddd 100%)`
            range2.style.background = `linear-gradient(to right, #ff9f00 0%, #ff9f00 ${(rating2 / largest) * 100}% , #ddd ${(rating2 / largest) * 100}%, #ddd 100%)`
            range4.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating4 / largest) * 100}% , #ddd ${(rating4 / largest) * 100}%, #ddd 100%)`
            range5.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating5 / largest) * 100}% , #ddd ${(rating5 / largest) * 100}%, #ddd 100%)`
        }
        
        if(largestIndex== 2){
            range2.style.background = `linear-gradient(to right, #ff9f00 0%, #ff9f00 ${100}% , #ddd ${100}%, #ddd 100%)`
            range1.style.background = `linear-gradient(to right, #ff6161 0%, #ff6161 ${(rating1 / largest) * 100}% , #ddd ${(rating1 / largest) * 100}%, #ddd 100%)`
            range3.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating3 / largest) * 100}% , #ddd ${(rating3 / largest) * 100}%, #ddd 100%)`
            range4.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating4 / largest) * 100}% , #ddd ${(rating4 / largest) * 100}%, #ddd 100%)`
            range5.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating5 / largest) * 100}% , #ddd ${(rating5 / largest) * 100}%, #ddd 100%)`
        }
        
        if(largestIndex== 1){
            range1.style.background = `linear-gradient(to right, #ff6161 0%, #ff6161 ${100}% , #ddd ${100}%, #ddd 100%)`
            range3.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating3 / largest) * 100}% , #ddd ${(rating3 / largest) * 100}%, #ddd 100%)`
            range2.style.background = `linear-gradient(to right, #ff9f00 0%, #ff9f00 ${(rating2 / largest) * 100}% , #ddd ${(rating2 / largest) * 100}%, #ddd 100%)`
            range4.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating4 / largest) * 100}% , #ddd ${(rating4 / largest) * 100}%, #ddd 100%)`
            range5.style.background = `linear-gradient(to right, #388e3c 0%, #388e3c ${(rating5 / largest) * 100}% , #ddd ${(rating5 / largest) * 100}%, #ddd 100%)`
        }
        


},[ratingAvg])

    return <div>
                {
                    total == 0 ?
                    <div className="reviewcmtBox">
                    <h4>Ratings & Reviews</h4>
                    <div style={{textAlign:"center"}}>
                            <h5>No Rarings and Reviews Yet</h5>
                            <h5>Buy Product and Post a Review</h5>
                    </div> 
                    </div> 
                     :
                     <div className="reviewcmtbox">
                     <h4 style={{textDecorationLine: 'underline'}}>Ratings & Reviews</h4>
                    <div className="starrating">
                        <div style={{}}>
                            <h3 style={{display:"inline-block",}}>{ratingAvg.toFixed(1)}</h3><IoStarSharp style={{marginBottom:"12px",display:"inline-block"}} size={'22px'}/>
                            <p>{total} Ratings & <br />{total-totalRatings} Reviews</p>
                        </div>
                        <div>
                        5 <IoStarSharp style={{display:"inline-block",marginBottom:"3px"}} /><div id="range5" className="startratingbar"></div>{rating5}<br />
                        4 <IoStarSharp style={{display:"inline-block",marginBottom:"3px"}} /><div id="range4" className="startratingbar"></div>{rating4}<br />
                        3 <IoStarSharp style={{display:"inline-block",marginBottom:"3px"}} /><div id="range3" className="startratingbar"></div>{rating3}<br />
                        2 <IoStarSharp style={{display:"inline-block",marginBottom:"3px"}} /><div id="range2" className="startratingbar"></div>{rating2}<br />
                        1 <IoStarSharp style={{display:"inline-block",marginBottom:"3px"}} /><div id="range1" className="startratingbar"></div>{rating1}<br />
                            
                            
                        
                            
                        </div>
                    </div>
                </div>
                
                    }
                
                {
                    reviews.map((prod:any) => (

                        <div key={prod._id}>
                            {
                                prod.comment == "" ? <div></div>   :
                            
                            <div key={prod._id} className="reiewbox">
                            {
                                prod.rating == 1 
                                ? <p className="mt-0" style={{backgroundColor:"red",width:"45px",borderRadius:"6px",padding:"0 0 0 10px",color:"white"}}> {prod.rating}<IoStarSharp style={{marginBottom:"3px"}} size={"15px"}  color="white"/></p>
                                : prod.rating == 2 
                                ? <p className="mt-0" style={{backgroundColor:"orange",width:"45px",borderRadius:"6px",padding:"0 0 0 10px",color:"white"}}> {prod.rating}<IoStarSharp style={{marginBottom:"3px"}} size={"15px"}  color="white"/></p> 
                                : <p className="mt-0" style={{backgroundColor:"Green",width:"45px",borderRadius:"6px",padding:"0 0 0 10px",color:"white"}}> {prod.rating}<IoStarSharp style={{marginBottom:"3px"}} size={"15px"}  color="white"/></p>

                               

                            }
                            <p className="mb-2 reviewtext">{prod.comment}</p>
                            <p style={{marginBottom:"0",color:"#888",fontSize:"13px",display:"inline-block"}}>{prod.user.firstname} {prod.user.lastname}</p>
                            <p  style={{color:"#888",fontSize:"13px",display:"inline-block",margin : "0 0 0 10px"}}>{monthNames[(prod.createdAt[5]+prod.createdAt[6])-1 ]},{(prod.createdAt[0]+prod.createdAt[1]+prod.createdAt[2]+prod.createdAt[3])}</p>
                            </div>
                            }
                        </div>
                    ))
                }
            </div>
}