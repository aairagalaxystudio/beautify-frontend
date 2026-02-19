async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function CollectionPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "30px" }}>Luxury Collection</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {products.map((product: any) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #eee",
              padding: "20px",
              borderRadius: "10px"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}