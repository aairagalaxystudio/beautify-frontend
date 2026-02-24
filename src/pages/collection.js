import Layout from "components/Layout"
import products from "data/products.json"

export default function Collection(){

return(
<Layout>

<div className="container">

<h1>Collection</h1>

{products.map(p=>(
<div key={p.id}>
<h3>{p.name}</h3>
<p>₹{p.price}</p>
</div>
))}

</div>

</Layout>
)

}