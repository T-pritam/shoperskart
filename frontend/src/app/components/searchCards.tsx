import { useRouter } from "next/navigation"

export default function Searchcard (props:any){
  const router = useRouter()
    return <>
        <div className="card" style={{cursor:"pointer" }} onClick={ () => {
  localStorage.removeItem("prodId")
  localStorage.setItem("prodId",props.product._id)
  router.push('/product/'+props.product._id)}}>
  <div className="" style={{display:"flex",flexWrap:"wrap"}}>
    <div className="" style={{flex:"1 1 90px"}}>
      <img src={props.product.thumbnail} style={{width:"80px",objectFit:"contain",margin:"5px 0 5px 20px"}} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="" style={{flex:"1 1 200px"}}>
      <div className="card-body" style={{padding:"8px"}}>
        <h5 className="card-title" style={{margin:"0",fontSize:"20px",fontWeight:"500",whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis",width: "12rem"}}>{props.product.title}</h5>
        
        <p className="card-text"><small className="text-body-secondary">{props.product.brand.name}</small></p>
      </div>
    </div>
  </div>
</div>
</>
}