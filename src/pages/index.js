import Header from "components/Header"
import Footer from "components/Footer"
import Hero from "components/Hero"
import ProductCard from "components/ProductCard"
import products from "data/products.json"

export default function Home(){

return(

<div>

<Header/>

<Hero/>

<section className="container">

<h2>Featured Collection</h2>

<div className="grid">

{products.slice(0,4).map(p=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

</section>

<Footer/>

</div>

)

}