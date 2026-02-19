import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Beautify by Mansi",
  description: "Luxury Press-On Nails"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="logo">BEAUTIFY BY MANSI</div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/collection">Collection</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}