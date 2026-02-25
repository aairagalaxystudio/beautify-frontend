```tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton'; // we'll create this

// Simulated fetch – replace with real API
async function getProduct(slug: string) {
  const products = [
    { id: 1, name: 'Rose Gold Set', price: 49, description: 'Elegant rose gold foil.', image: '/images/nail1.jpg' },
    { id: 2, name: 'French Gloss', price: 59, description: 'Classic sheer pink with glossy finish.', image: '/images/nail2.jpg' },
  ];
  const product = products.find((p) => p.id.toString() === slug);
  return product;
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  if (!product) return notFound();

  return (
    <div className="productPage">
      <div className="gallery">
        <Image src={product.image} alt={product.name} width={700} height={700} />
      </div>
      <div className="info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>₹{product.price}</h2>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
```
