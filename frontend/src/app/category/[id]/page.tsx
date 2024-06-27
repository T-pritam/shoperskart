"use client"
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import BasicExample from "../../components/cards"
import '../../../../static/css/home.css'
import NavScrollExample from "@/app/components/Navbar"
import { DiBackbone, DiVim } from "react-icons/di"

export default function Categories({params} : {
    params :{
        id : string
    }
}){
    const router = useRouter()
    const [categories,setCategories] = useState<unknown[]>([])
    const [product,setProduct] = useState<unknown[]>([])
    const [catId,setCatId] = useState("")

    useEffect(() => {
        const sendotp = async() => {
                const a = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"products/getall?category="+params.id)
                setProduct(a.data)                
        }
        sendotp()
    },[])


    useEffect(() => {

         const getCategories = async() => {
            const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"categories/")
            setCategories(data.data)
        }

        getCategories()
    },[])




       useEffect(() => {
        const carouselWrapper = document.querySelector('.carousel-wrapper') as HTMLInputElement;
        const slides = document.querySelectorAll('.carousel-slide');
        const prevButton = document.querySelector('.carousel-button-prev');
        const nextButton = document.querySelector('.carousel-button-next');
        const slidesPerView = 3;
        const totalSlides = 12;
        let currentIndex = 0;
  
        function updateCarousel() {
          const newIndex = currentIndex * -33.3;
          carouselWrapper.style.transform = `translateX(${newIndex}%)`;
        }
  
        function showNext() {
          if (currentIndex >= totalSlides - slidesPerView) {
            currentIndex = 0;
          } else {
            currentIndex++;
          }
          updateCarousel();
        }
  
        function showPrev() {
          if (currentIndex <= 0) {
            currentIndex = totalSlides - slidesPerView;
          } else {
            currentIndex--;
          }
          updateCarousel();
        }
  
        nextButton?.addEventListener('click', showNext);
        prevButton?.addEventListener('click', showPrev);
       })

    return <div><NavScrollExample />
        <div style={{margin:"50px 1vw 1vw 1vw"}}>
        
        <h1>Categories</h1>
        <h4 onClick={async () => {
            router.push("/")
        }}>All</h4>
        <div className="optiona" style={{width:"100%",height:"23vh",overflow:"hidden"}}>
        {
            
            categories.map((prod:any) => (
                <div key={prod._id} style={{display:"inline-block",overflowX:"hidden" ,margin:"0 10px 0 0",textAlign:"center"}}>

                <div style={{display:"inline-block"}}>
                <img src={prod.img} onClick={async () => {
                    router.push("/category/"+prod._id) 
                }} style={{width:"80px" ,cursor:"pointer"}} alt="..." />
                <h6>{prod.name}</h6>
                </div>
                
                </div>
            ))
        }
        </div>
        <div className="optionb" style={{width:"100%",height:"18vh",overflow:"hidden"}}>
        

            <div className="carousel-container">
                <div className="carousel-wrapper">
                {
                    categories.map((prod:any) => (
                        <div key={prod._id}>
                            <div className="carousel-slide"><img src={prod.img} style={{width:"29vw",height:"30vw"}} onClick={async () => {
                            // const a = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"products/getall?category="+prod._id)
                            // setProduct(a.data) 
                            router.push("/category/"+prod._id) 
                        }}/>
                        
                        </div>
                        <h6 style={{textAlign:"center",fontSize:"13px"}}>{prod.name}</h6>
                    
                        </div>
                ))}
                    
                </div>
                <div className="carousel-buttonn carousel-button-next">&#10095;</div>
                <div className="carousel-buttonn carousel-button-prev">&#10094;</div>
            </div>
        </div>

        

    <BasicExample product = {product} />
    </div>
    </div>
}