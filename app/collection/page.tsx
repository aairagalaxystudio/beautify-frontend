"use client";

import { motion } from "framer-motion";

const products = [
  { name: "Royal Nude Press-On", price: 1499 },
  { name: "French Classic", price: 1299 },
  { name: "Midnight Glam", price: 1799 },
];

export default function Collection() {
  return (
    <section className="collection">
      <h1>Luxury Collection</h1>

      <div className="grid">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2>{product.name}</h2>
            <p>₹ {product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}