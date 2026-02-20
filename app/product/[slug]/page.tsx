import { products } from '@/lib/products'
import PageTransition from '@/components/PageTransition'
import { notFound } from 'next/navigation'

export default function ProductPage({ params }: any) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) return notFound()

  return (
    <PageTransition>
      <main className="product-page">
        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>
      </main>
    </PageTransition>
  )
}