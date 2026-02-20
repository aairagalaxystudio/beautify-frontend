import './globals.css'
import { CartProvider } from '@/components/CartContext'
import CartDrawer from '@/components/CartDrawer'
import Cursor from '@/components/Cursor'

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <CartProvider>
          <Cursor />
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}