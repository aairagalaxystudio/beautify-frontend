import { getProducts } from "@/lib/api";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default async function CollectionPage() {
  const products: Product[] = await getProducts();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Luxury Collection</h1>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h2>{product.name}</h2>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}