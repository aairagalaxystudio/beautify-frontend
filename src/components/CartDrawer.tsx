```tsx
'use client';

import { useCart } from '@/store/cartStore';

export default function CartDrawer() {
  const items = useCart((state) => state.items);

  return (
    <div className="cartDrawer">
      <h2>Your Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map((item) => (
        <div key={item.id} className="cartItem">
          <span>{item.name}</span>
          <span>
            ₹{item.price} x {item.quantity}
          </span>
        </div>
      ))}
    </div>
  );
}
```

---
