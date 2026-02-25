```tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        Beautify
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Collection</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
```
