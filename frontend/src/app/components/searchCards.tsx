import { useRouter } from "next/navigation"

export default function Searchcard (props:any){
  const router = useRouter()
    return <>
        <div className="card" style={{cursor:"pointer" }} onClick={ () => {
  router.push('/product/'+props.product._id)}}>
  <div className="" style={{display:"flex",flexWrap:"wrap"}}>
    <div className="" style={{flex:"1 1 0px"}}>
      <img src={props.product.thumbnail} style={{width:"50px",objectFit:"contain",margin:"5px 0 5px 15px"}} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="" style={{flex:"1 1 200px"}}>
      <div className="card-body" style={{padding:"8px"}}>
        <h5 className="card-title" style={{margin:"0",fontSize:"16px",fontWeight:"500",whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis",width: "18rem"}}>{props.product.title}</h5>
        
      <small style={{color:"#388e3c"}}>in {props.product.category.name}</small>
      </div>
    </div>
  </div>
</div>
</>
}