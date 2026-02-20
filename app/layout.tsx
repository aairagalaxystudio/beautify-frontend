import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Beautify by Mansi',
  description: 'Luxury Press-On Nails',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="logo">
            Beautify by Mansi
          </Link>

          <nav>
            <Link href="/collection">Collection</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  )
}