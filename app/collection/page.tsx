export default function CollectionPage() {
  return (
    <div style={{ padding: "120px 8%" }}>
      <h1>Luxury Collection</h1>

      <div className="collection-grid" style={{ marginTop: "60px" }}>
        <div className="product-card">
          <h2>Royal Nude Press-On</h2>
          <p className="price">₹1499</p>
        </div>

        <div className="product-card">
          <h2>French Classic</h2>
          <p className="price">₹1299</p>
        </div>
      </div>
    </div>
  );
}