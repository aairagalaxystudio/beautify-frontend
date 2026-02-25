```tsx
'use client';

import Tilt from 'react-parallax-tilt';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Tilt glareEnable glareMaxOpacity={0.3} scale={1.05}>
      <Link href={`/product/${product.id}`} className="card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
      </Link>
    </Tilt>
  );
}
```
```tsx
'use client';
import { useWishlist } from '@/store/wishlistStore';

// inside ProductCard component
const { toggleItem, isInWishlist } = useWishlist();
const inWishlist = isInWishlist(product.id);

return (
  <Tilt ...>
    <div className="card">
      <button onClick={() => toggleItem(product)}>
        {inWishlist ? '❤️' : '🤍'}
      </button>
      <Link ...>...</Link>
    </div>
  </Tilt>
);
```

---
