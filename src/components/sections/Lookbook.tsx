```tsx
'use client';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const looks = [
  { id: 1, image: '/images/lookbook1.jpg', title: 'Gilded Garden' },
  { id: 2, image: '/images/lookbook2.jpg', title: 'Midnight Velvet' },
  { id: 3, image: '/images/lookbook3.jpg', title: 'Pearl Essence' },
];

export default function Lookbook() {
  return (
    <section className="lookbook">
      <Container>
        <h2>Lookbook</h2>
        <div className="lookbook-grid">
          {looks.map((look, index) => (
            <motion.div
              key={look.id}
              className="look-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={look.image} alt={look.title} />
              <h3>{look.title}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```
