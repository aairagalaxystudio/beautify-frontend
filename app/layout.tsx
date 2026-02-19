import './globals.css'

export const metadata = {
  title: 'Beautify by Mansi',
  description: 'Luxury Beauty Brand'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}