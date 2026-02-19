import { getProducts } from "@/lib/api";

export default async function CollectionPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Luxury Collection</h1>

      {products.map((product: any) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h2>{product.name}</h2>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}
