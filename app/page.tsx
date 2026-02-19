"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      
      {/* NAVBAR */}
      <nav>
        <h2>Beautify by Mansi</h2>
        <div>
          <Link href="/collection">Collection</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Luxury Press-On Nails
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Premium. Elegant. Timeless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link href="/collection">
            <button>Shop Now</button>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}