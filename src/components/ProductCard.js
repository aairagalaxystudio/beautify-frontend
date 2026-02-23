import Image from 'next/image';
import Button from './Button';

export default function ProductCard({ product }) {
  return (
    <div style={{ background: 'var(--soft-white)', padding: 'var(--space-sm)', border: 'var(--border-thin)' }}>
      <div style={{ position: 'relative', width: '100%', height: 300, marginBottom: 'var(--space-sm)' }}>
        <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{product.name}</h3>
      <p style={{ color: 'var(--soft-grey)' }}>{product.description}</p>
      <p style={{ margin: 'var(--space-sm) 0', fontFamily: 'var(--font-primary)' }}>${product.price}</p>
      <Button variant="secondary">Discover</Button>
    </div>
  );
}
