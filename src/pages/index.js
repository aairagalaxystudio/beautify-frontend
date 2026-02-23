import Layout from '@/components/Layout';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1>Luxury salon elegance — anytime, anywhere.</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--soft-grey)', margin: 'var(--space-md) 0' }}>
            Discover our couture collection for the modern muse.
          </p>
          <Button variant="primary">Explore Collection</Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container" style={{ paddingBottom: 'var(--space-xl)' }}>
        <h2 className="gold-underline">Featured</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Image */}
      <section className="container" style={{ paddingBottom: 'var(--space-xl)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)', alignItems: 'center' }}>
          <div>
            <h2>Wearable fashion statements</h2>
            <p style={{ color: 'var(--soft-grey)' }}>
              Each shade is crafted to complement your personal style—minimal, confident, and effortlessly elegant.
            </p>
            <Button variant="gold">Discover</Button>
          </div>
          <div style={{ position: 'relative', height: 500 }}>
            <img src="/images/model1.jpg" alt="Model with elegant nails" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
