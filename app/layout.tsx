import "./globals.css"

export const metadata = {
  title: "Beautify by Mansi",
  description: "Luxury Press-On Nails"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}