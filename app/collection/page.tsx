"use client";
import { useEffect, useState } from "react";

export default function Collection() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
        Luxury Collection
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px"
      }}>
        {products.map((p) => (
          <div key={p._id} style={{
            border: "1px solid #eee",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <img src={p.image} width="100%" />
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}