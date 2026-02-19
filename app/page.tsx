import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "120px 40px", textAlign: "center" }}>
      <h1>Beautify by Mansi</h1>
      <p>Luxury Press-On Nails</p>

      <div style={{ marginTop: "30px" }}>
        <Link href="/collection">
          View Collection
        </Link>
      </div>
    </main>
  );
}