import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black" style={{ color: 'var(--soft-white)', padding: 'var(--space-lg) 0', marginTop: 'var(--space-xl)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
        <div>
          <h3 style={{ color: 'var(--champagne-gold)' }}>Beautify by Mansi</h3>
          <p style={{ color: 'var(--soft-grey)' }}>Luxury salon elegance — anytime, anywhere.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul style={{ listStyle: 'none' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Follow</h4>
          <ul style={{ listStyle: 'none' }}>
            <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: 'var(--space-lg)', fontSize: '0.875rem', color: 'var(--soft-grey)' }}>
        <hr style={{ background: 'var(--soft-grey)', margin: 'var(--space-sm) 0' }} />
        <p>© {new Date().getFullYear()} Beautify by Mansi. All rights reserved.</p>
      </div>
    </footer>
  );
}
