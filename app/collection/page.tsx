import FadeIn from '@/components/FadeIn'

export default function Collection() {
  return (
    <main className="collection">
      <h1 className="collection-title">Luxury Collection</h1>

      <FadeIn>
        <div className="product-card">
          <h2>Royal Nude</h2>
          <p>₹1499</p>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="product-card">
          <h2>French Classic</h2>
          <p>₹1299</p>
        </div>
      </FadeIn>
    </main>
  )
}