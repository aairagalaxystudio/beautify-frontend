```javascript
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ variant = 'default', color = 'black' }) {
  // Variant: 'default' (all caps wide) or 'stacked' (Beautify above by Mansi)
  const logoSrc = variant === 'stacked' ? '/logo-stacked.svg' : '/logo.svg';
  
  return (
    <Link href="/" className="logo">
      <Image 
        src={logoSrc} 
        alt="Beautify by Mansi" 
        width={variant === 'stacked' ? 120 : 180} 
        height={40} 
        style={{ filter: color === 'white' ? 'brightness(0) invert(1)' : 'none' }}
      />
    </Link>
  );
}
```
