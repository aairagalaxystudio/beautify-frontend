```tsx
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
    />
  );
}
```
