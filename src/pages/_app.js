```javascript
import '@/styles/globals.css';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-primary',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${playfair.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
```
