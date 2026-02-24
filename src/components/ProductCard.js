export default function ProductCard({img,name,price}){
return(
<div>
<img src={img} style={{width:"100%",borderRadius:"10px"}} />
<h3>{name}</h3>
<p>₹{price}</p>
</div>
)
}