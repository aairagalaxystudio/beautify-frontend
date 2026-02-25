```tsx
'use client';

import { useCart } from '@/store/cartStore';

export default function AddToCartButton({ product }: { product: any }) {
  const addItem = useCart((state) => state.addItem);

  return (
    <button
      className="btn"
      onClick={() => addItem({ ...product, quantity: 1 })}
    >
      Add to Cart
    </button>
  );
}
```

---