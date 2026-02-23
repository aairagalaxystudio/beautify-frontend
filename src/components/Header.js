import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-soft-white" style={{ padding: '1rem 0', borderBottom: '1px solid var(--soft-grey)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo variant="stacked" />
        <nav>
          <ul style={{ display: 'flex', gap: 'var(--space-md)', listStyle: 'none' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
