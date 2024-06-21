"use client"

import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { FaShoppingCart } from "react-icons/fa";
import ReviewProduct from './reviewProduct';
import { IoStarSharp } from "react-icons/io5";
import './a.css'


const MyCarousel = (props : any) => {
  const router = useRouter()
  const cookies = new Cookies()
  const [cart,setCart] = useState(false)
  const [auth,setAuth] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [a,setA] = useState(0)
  const [b,setB] = useState(0)
  const [c,setC] = useState(0)

  useEffect(() => {
    const getcartprod =async() =>{
      const data = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+`review/product/${props.product._id}`)
        setA(data.data.ratings[0])        
        setB(data.data.totalDocs)        
        setC(data.data.count) 
      if(cookies.get("access_token")){
        const a = await axios.get(process.env.NEXT_PUBLIC_BASE_URL+`cart/user/${cookies.get("access_token")}/${props.product._id}`)   

        setAuth(true)
        if(a.data.count != 0){
          setCart(true)
        }
      }
    }
    getcartprod()
  },[])

  useEffect(() => {
    const carousel = document.querySelector('.carousel-images') as HTMLInputElement;
const images = document.querySelectorAll('.carousel-image');    
const prevButton = document.querySelector('.carousel-button.prev') ;
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;



function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;   
}

prevButton?.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    
    updateCarousel();
});

nextButton?.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;

    updateCarousel();
});
  })

  const handleImageClick = (imageSrc:any) => {
    setCurrentImage(imageSrc);

    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };


return <div style={{margin : "50px 0 0 0"}}>
  {isModalOpen && (
                <div className='modall' onClick={closeModal}>
                    <div className='modalContent' onClick={(e) => e.stopPropagation()}>
                        <span className='closeButton' onClick={closeModal}>&times;</span>
                        <img src={currentImage} alt="Full View" className='fullImage' />
                    </div>
                </div>
            )}
  <div className='containerr'>
        <div className='leftt'>
            <div className="carousel">
              <button className="carousel-button prev">‹</button>
              <div className="carousel-images">
              {
                props.img.map((prod:any) => (
                <img key={prod} src={prod} className='carousel-image' alt="..." onClick={() => handleImageClick(prod)}/>
                ))
              }
                </div>
                  <button className="carousel-button next">›</button>
            </div>
            

            <div className='btnsdiv'>
            {
    cart ? 
    <button type="button" className="btn btn-dark btns" onClick={() => router.push("/cart")}> <FaShoppingCart /> Go to Cart</button>
    :<button type="button" className="btn btn-dark btns" onClick={async () => {
      if(auth){
        const a = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+`cart/`,{
        user : cookies.get("access_token"),
        product : props.product._id,
      })
      router.push("/cart")
      }
      else{
        router.push("/login")
      }
      }}> <FaShoppingCart /> Add to Cart</button>
  }
  <button type="button" className="btn btn-dark btns">Buy now</button>
        
            </div>
        </div>
        <div className='rightt' >
        <h3>{props.product.title}</h3>
       
       {
         b == 0 ? <div></div> :
         <div>
       {
         a <= 1 ?
         <p className="mt-0 mb-0" style={{backgroundColor:"red",width:"50px",borderRadius:"6px",padding:"0 0 0 8px",color:"white",display:"inline-block"}}> {a.toFixed(1)}<IoStarSharp style={{marginBottom:"4px"}} size={"15px"}  color="white"/></p> 
         : a <= 2 ?
         <p className="mt-0 mb-0" style={{backgroundColor:"orange",width:"50px",borderRadius:"6px",padding:"0 0 0 8px",color:"white",display:"inline-block"}}> {a.toFixed(1)}<IoStarSharp style={{marginBottom:"4px"}} size={"15px"}  color="white"/></p> 
         : <p className="mt-0 mb-0" style={{backgroundColor:"green",width:"50px",borderRadius:"6px",padding:"0 0 0 8px",color:"white",display:"inline-block"}}> {a.toFixed(1)}<IoStarSharp style={{marginBottom:"4px"}} size={"15px"}  color="white"/></p> 
       }
       <p className="mt-0 mb-0" style={{display:"inline-block",marginLeft:"10px"}}>{b} Ratings & {b-c} Reviews</p>

       </div>
       }
       <h1 style={{display :"inline-block", marginRight:"10px",marginTop:"6px"}}>&#8377;{new Intl.NumberFormat('en-IN').format(Math.floor(props.product.price-(props.product.price*props.product.discountPercentage)/100))}</h1>
       <h5 style={{textDecoration:"line-through",display:"inline-block"}}>&#8377;{new Intl.NumberFormat('en-IN').format(props.product.price)}</h5>
       <h5 className='mb-3' style={{display:"inline-block",marginLeft:"10px",color:"darkseagreen"}}>{props.product.discountPercentage}% off</h5>

       <div>
         <h5>Available offers</h5>
         <p style={{margin:"0"}}><b>Partner Offer</b> Get 10% off upto ₹50 using SuperCoins on Phonepe UPI</p>
         <p style={{margin:"0"}}><b>Bank Offer</b> 5% Cashback on Credit Card</p>
         <p><b>Bank Offer</b> 10% off up to ₹1250 on HDFC Bank Credit Card Min Txn Value: ₹7500</p>
       </div>

       <div>
         <h5>Description </h5>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu eros non tortor malesuada tempor. In vel lorem elit. Vestibulum a blandit neque. Vestibulum interdum eros euismod pulvinar elementum. Vivamus tempus sodales justo ac suscipit. Donec quis est et enim convallis lacinia at vitae nisl. Nam suscipit urna eu egestas fermentum. Phasellus malesuada consequat libero, laoreet ultrices nunc pellentesque vel. Nam pulvinar luctus convallis. Curabitur diam lectus, aliquam sed faucibus vitae, euismod eget nulla.</p>

           <p>Maecenas a massa eros. Proin sollicitudin sapien quis ligula fringilla, ut mollis lacus blandit. Nulla fringilla mollis sodales. Vestibulum et ligula luctus, lobortis purus eu, vulputate justo. Curabitur eu varius nisl. Cras sed tellus pretium lorem auctor volutpat. Integer placerat libero a pellentesque ultricies. Nam facilisis porttitor placerat. Integer sit amet interdum sem. Sed commodo, tortor ut consequat euismod, purus lorem dictum risus, ac porta leo lectus sed nulla.</p>

           <p>Aliquam blandit porta porttitor. Maecenas vel cursus ex. In at velit eu tellus fringilla rutrum. Integer quis leo risus. Integer vestibulum, mauris nec elementum vestibulum, ipsum ante faucibus leo, in congue lacus dui sed dolor. Curabitur ornare at mi quis tempor. Curabitur pulvinar urna sapien, eget malesuada elit placerat id. Integer luctus mauris quis efficitur vestibulum. Pellentesque vitae dolor non dolor consectetur semper.</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu eros non tortor malesuada tempor. In vel lorem elit. Vestibulum a blandit neque. Vestibulum interdum eros euismod pulvinar elementum. Vivamus tempus sodales justo ac suscipit. Donec quis est et enim convallis lacinia at vitae nisl. Nam suscipit urna eu egestas fermentum. Phasellus malesuada consequat libero, laoreet ultrices nunc pellentesque vel. Nam pulvinar luctus convallis. Curabitur diam lectus, aliquam sed faucibus vitae, euismod eget nulla.</p>
       <ReviewProduct id={props.product._id}/>
       </div>
        </div>
    </div>
    


</div>
}
export default MyCarousel