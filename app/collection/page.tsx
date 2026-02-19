export default function Collection() {
  return (
    <main style={{ padding: "120px 60px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "40px" }}>
        Luxury Collection
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px"
        }}
      >
        <div
          style={{
            padding: "40px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)"
          }}
        >
          <h2>Royal Nude</h2>
          <p>₹1499</p>
        </div>

        <div
          style={{
            padding: "40px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)"
          }}
        >
          <h2>French Classic</h2>
          <p>₹1299</p>
        </div>
      </div>
    </main>
  );
}