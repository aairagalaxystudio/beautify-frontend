import FadeIn from '@/components/FadeIn'

export default function Home() {
  return (
    <main className="hero">
      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <FadeIn>
        <div className="hero-content">
          <h1>Luxury Press-On Nails</h1>
          <p>Handcrafted Elegance</p>
        </div>
      </FadeIn>
    </main>
  )
}