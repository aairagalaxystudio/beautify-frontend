export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Luxury Press-On Nails</h1>
      <p>Premium Handmade Designs</p>
      <button style={styles.button}>Shop Now</button>
    </section>
  )
}

const styles = {
  hero: {
    padding: '100px 20px',
    textAlign: 'center' as const
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    background: 'black',
    color: 'white',
    border: 'none'
  }
}