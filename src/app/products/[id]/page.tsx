import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import ProductDetail from "@/components/ProductDetail"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}

