```tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  { name: 'Priya', text: 'Absolutely in love! They lasted two weeks.', rating: 5, image: '/images/customer1.jpg' },
  // ...
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  return (
    <section className="testimonials">
      <h2>Kind Words</h2>
      <div className="carousel">
        <button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}>‹</button>
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <img src={testimonials[index].image} alt={testimonials[index].name} />
          <p>"{testimonials[index].text}"</p>
          <h4>{testimonials[index].name}</h4>
        </motion.div>
        <button onClick={() => setIndex((i) => (i + 1) % testimonials.length)}>›</button>
      </div>
    </section>
  );
}
```
