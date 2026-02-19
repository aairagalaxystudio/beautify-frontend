export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h2>Beautify by Mansi</h2>
      <a href="/collection">Collection</a>
    </nav>
  );
}