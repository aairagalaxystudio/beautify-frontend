import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

export default function Collection(){

const products=[
{img:"/nail1.jpg",name:"Rose Luxury",price:999},
{img:"/nail2.jpg",name:"Diamond Gloss",price:1199}
]

return(
<>
<Navbar/>

<div className="container">
<h1 style={{marginTop:"40px"}}>Collection</h1>

<div className="grid">
{products.map((p,i)=>(
<ProductCard key={i} {...p}/>
))}
</div>
</div>

<Footer/>
</>
)
}