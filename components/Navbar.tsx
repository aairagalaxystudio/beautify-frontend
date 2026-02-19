export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>💅 Beautify by Mansi</h2>
      <div>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    background: '#f8f8f8'
  }
}