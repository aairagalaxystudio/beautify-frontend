export default function CollectionPage() {
  return (
    <main>
      <h1 style={{ fontSize: "48px", marginBottom: "40px" }}>
        Luxury Collection
      </h1>

      <div style={{ display: "grid", gap: "30px" }}>
        <div style={cardStyle}>
          <h2>Royal Nude Press-On</h2>
          <p style={{ color: "#d4af37" }}>₹1499</p>
        </div>

        <div style={cardStyle}>
          <h2>French Classic</h2>
          <p style={{ color: "#d4af37" }}>₹1299</p>
        </div>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  padding: "40px",
  borderRadius: "20px",
  background: "#111",
};