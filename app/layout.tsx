import "./globals.css";

export const metadata = {
  title: "Beautify by Mansi — Luxury Press On Nails",
  description: "Premium handcrafted press-on nails inspired by Dior elegance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}