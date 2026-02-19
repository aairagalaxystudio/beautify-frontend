import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beautify by Mansi",
  description: "Luxury Press-On Nails | Premium. Elegant. Timeless.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="nav-container">
            <a href="/" className="logo">
              Beautify by Mansi
            </a>
            <nav>
              <a href="/collection">Collection</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          © {new Date().getFullYear()} Beautify by Mansi. All rights reserved.
        </footer>
      </body>
    </html>
  );
}