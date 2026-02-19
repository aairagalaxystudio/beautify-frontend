import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beautify by Mansi",
  description: "Luxury Beauty Brand",
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
          <div className="logo">Beautify by Mansi</div>
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