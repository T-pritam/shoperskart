"use client"
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import BasicExample from "./cards"
import Skeleton from "../components/skeletons/home-skeleton";
import '../../../static/css/home.css'

export default function Categories(){
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(true)
    const [categories,setCategories] = useState<unknown[]>([])
    const [product,setProduct] = useState<unknown[]>([])
    const [catId,setCatId] = useState("")
    const [page,setPage] = useState(1)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        const sendotp = async() => {
                const a = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+`products/getall?limit=20&page=${(page + 5) % 9}`)
                setProduct(a.data)     
                setIsLoading(false)                  
        }
        sendotp()
    },[page])


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


    return <div>
        {
          isLoading ? (
            <Skeleton />
          ) : (
            <div  style={{margin:"50px 1vw 1vw 1vw"}}>
        <h1>Categories</h1>
        <div className="optiona" style={{width:"1250px",height:"23vh",overflow:"hidden"}}>
        {
            
            categories.map((prod:any) => (
                <div key={prod._id} style={{display:"inline-block",overflowX:"hidden" ,margin:"0 12px 0 0",textAlign:"center"}}>

                <div style={{display:"inline-block"}}>
                <img src={prod.img} onClick={async () => {
                    // const a = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+"products/getall?category="+prod._id)
                    // setProduct(a.data) 
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

<div className='pageouter'>
  <div className='pageinner'>
      <p className='prevnexttext'>Page {page} of 9</p>
      {
              page == 1 ? <div style={{marginLeft:"174px",display:"inline-block"}}></div> :  <button className='prevnextbtn' onClick={() => {
                setPage(page == 1 ? 1 : page -1)}
            }>PREVIOUS</button>
            }
      {/* <button className='prevnextbtn' onClick={() => {
          setPage(page == 1 ? 1 : page -1)}
      }>PREVIOUS</button> */}
    {numbers.map((item) => (
              <div key={item} style={{display:"inline-block"}}>
                {
                page == item ? 
                (<button key={item} className='serialnumberbtn' style={{backgroundColor:"#0b8011",color:"white"}}>{item}</button>) :
                (<button key={item} className='serialnumberbtn' onClick={() => {
                  setPage(item)
                }}>{item}</button>)
              }
              </div>
              
            ))}
            {
              page == 9 ? <></> :  <button className='prevnextbtn' onClick={() => {
                setPage(page == 9 ? 9 : page +1 )
              }}>NEXT</button>
            }
          {/* <button className='prevnextbtn' onClick={() => {
            setPage(page == 9 ? 9 : page +1 )
          }}>NEXT</button> */}
</div>


<div className="smallpageinnerdiv">
  <MdKeyboardArrowLeft className='smallprevnextbtn' color="#0b8011" size={"40px"} onClick={() => {
          setPage(page == 1 ? 1 : page -1)}
      } />
      {numbers.map((item) => (
              <div key={item} style={{display:"inline-block"}}>
                {
                page == item ? 
                (<button key={item} className='serialnumberbtn' style={{backgroundColor:"#0b8011",color:"white"}}>{item}</button>) :
                (<button key={item} className='serialnumberbtn' onClick={() => {
                  setPage(item)
                }}>{item}</button>)
              }
              </div>
              
            ))}
      
      
    <MdKeyboardArrowRight className="smallprevnextbtn" color="#0b8011" size={"40px"} onClick={() => {
      setPage(page == 9 ? 9 : page +1 )}} />

</div>
</div>
            </div>
          )
        }
    
    </div>
}
