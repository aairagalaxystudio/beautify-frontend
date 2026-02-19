import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Beautify by Mansi",
  description: "Luxury Press-On Nails",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            padding: "20px 60px",
            display: "flex",
            justifyContent: "space-between",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(10px)",
            zIndex: 1000,
          }}
        >
          <a href="/">Beautify by Mansi</a>
          <a href="/collection">Collection</a>
        </header>

        <div style={{ marginTop: "100px" }}>{children}</div>
      </body>
    </html>
  );
}