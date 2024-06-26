import NavScrollExample from "../../components/Navbar"
import ProceedToCheckout from "../../components/ProceesToCheckout"
import ProceedToCheckoutOne from "../../components/ProceedToCheckoutOne"
import Custom404 from "../../not-found"

export default function Checkout({params} : {
    params : {
        id : string
    }
})
{
    if(params.id == "all"){
        return <div style={{marginTop:"50px"}}>
        <NavScrollExample />
        <ProceedToCheckout />
    </div>
    }
    else{
        return <div  style={{marginTop:"50px"}}>
            <NavScrollExample />
            <ProceedToCheckoutOne 
                productId = {params.id} 
            />
        </div>   
    }
    
}