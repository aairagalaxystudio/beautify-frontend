```tsx
import Container from '../ui/Container';
import ProductCard from '../ProductCard';

const dummyProducts = [
  { id: 1, name: 'Rose Gold Set', price: 49, image: '/images/nail1.jpg' },
  { id: 2, name: 'French Gloss', price: 59, image: '/images/nail2.jpg' },
];

export default function FeaturedProducts() {
  return (
    <section className="products">
      <Container>
        <h2>Featured Collection</h2>
        <div className="grid">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
```
