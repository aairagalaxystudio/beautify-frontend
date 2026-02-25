```tsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WishlistState {
  items: WishlistItem[];
  toggleItem: (product: WishlistItem) => void;
  isInWishlist: (id: number) => boolean;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggleItem: (product) =>
        set((state) => {
          const exists = state.items.find((i) => i.id === product.id);
          if (exists) {
            return { items: state.items.filter((i) => i.id !== product.id) };
          }
          return { items: [...state.items, product] };
        }),
      isInWishlist: (id) => get().items.some((i) => i.id === id),
    }),
    { name: 'wishlist-storage' }
  )
);
```
