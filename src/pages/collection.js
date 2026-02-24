import Header from "components/Header"
import Footer from "components/Footer"
import ProductCard from "components/ProductCard"
import products from "data/products.json"

export default function Collection(){

return(

<div>

<Header/>

<section className="container">

<h1>Collection</h1>

<div className="grid">

{products.map(p=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

</section>

<Footer/>

</div>

)

}