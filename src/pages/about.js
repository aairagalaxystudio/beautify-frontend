```javascript
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container" style={{ paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}>
        <h1>About</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
          <div>
            <p style={{ fontSize: '1.25rem' }}>
              Beautify by Mansi is not a nail product. It is a wearable fashion statement. A luxury detail. A refined expression of elegance.
            </p>
            <p>
              Founded on the principle that luxury should be accessible, we bring salon-quality elegance to your daily ritual. Our collections are inspired by the modern muse—confident, feminine, and powerful.
            </p>
          </div>
          <div>
            <img src="/images/about.jpg" alt="Luxury nail care" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
```
