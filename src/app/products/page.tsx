```tsx
'use client';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasMore) {
      fetch(`/api/products?page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts((prev) => [...prev, ...data.products]);
          setHasMore(data.hasMore);
          setPage((p) => p + 1);
        });
    }
  }, [inView, hasMore, page]);

  return (
    <div className="products-page">
      <h1>All Collections</h1>
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasMore && <div ref={ref}>Loading...</div>}
    </div>
  );
}
```
