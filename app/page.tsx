import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <h1>Luxury Press-On Nails</h1>
      <p>Premium. Elegant. Timeless.</p>

      <Link href="/collection" className="cta">
        Shop Collection
      </Link>
    </main>
  );
}