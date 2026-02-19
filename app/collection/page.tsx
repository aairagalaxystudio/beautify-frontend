export default function Collection() {
  const products = [
    { name: "Royal Nude Press-On", price: 1499 },
    { name: "French Classic", price: 1299 },
  ];

  return (
    <main className="collection">
      <h1>Luxury Collection</h1>

      <div className="grid">
        {products.map((product, index) => (
          <div key={index} className="card">
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}