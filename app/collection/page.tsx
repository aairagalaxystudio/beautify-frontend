import Link from "next/link";

export default function CollectionPage() {
  return (
    <main className="collection-page">
      
      <section className="collection-hero">
        <h1>Luxury Collection</h1>
        <p>Crafted elegance. Timeless beauty.</p>
      </section>

      <section className="collection-grid">

        <div className="product-card">
          <h3>Royal Nude Press-On</h3>
          <p className="price">₹1499</p>
          <button className="btn">Shop Now</button>
        </div>

        <div className="product-card">
          <h3>French Classic</h3>
          <p className="price">₹1299</p>
          <button className="btn">Shop Now</button>
        </div>

      </section>

      <div className="back-home">
        <Link href="/">← Back to Home</Link>
      </div>

    </main>
  );
}