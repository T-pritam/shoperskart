"use client"
import { useEffect,useState } from "react"
import axios from "axios"
import NavScrollExample from "@/app/components/Navbar"
import MyCarousel from "@/app/components/carousal"
export default async function Product({params}:
    {params :{
        id: string
    }}){
    const [product,setProduct] = useState<unknown[]>([])
    const [img,setImg] = useState([])
    const [count,setCount] = useState(0)
    const [htmlImg,setHtmlImg] = useState('')

    useEffect(() => {
        const getcart = async () => {
            try{
                const a = axios.get(process.env.NEXT_PUBLIC_BASE_URL+"products/get/"+params.id).then((res) => {
                    setProduct(res.data)
                    setImg(res.data.images)
                })
                setCount(4)
            }
            catch(error){
                return <>
                    <h1>Sorry</h1>
                </>
            }
        }
        getcart()
    },[count])

    if(product!=null)
    return <>
        <div>
        <NavScrollExample />
        <MyCarousel product = {product} img = {img}  id = {params.id}/>
        </div>
    
    </>
}