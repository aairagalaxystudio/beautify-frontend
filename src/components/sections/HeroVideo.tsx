```tsx
'use client';

import { motion } from 'framer-motion';

export default function HeroVideo() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="heroVideo">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="heroContent"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Beautify by Mansi</h1>
        <p>Luxury Press-On Nails</p>
        <button className="cta">Explore Collection</button>
      </motion.div>
    </section>
  );
}
```
