```tsx
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';
import SmoothScroll from '@/components/SmoothScroll';
import CartDrawer from '@/components/CartDrawer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Beautify by Mansi',
  description: 'Luxury press-on nails',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScroll>
          <Layout>
            {children}
            <CartDrawer />
          </Layout>
        </SmoothScroll>
      </body>
    </html>
  );
}
```

---