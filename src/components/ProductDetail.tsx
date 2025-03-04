"use client"

import { useState } from "react"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/cart-context"
import ImageGallery from "@/components/ImageGallery"
import OptionsSelector from "@/components/OptionSelector"
import Reviews from "@/components/Reviews"
import { Button } from "@/components/ui/button"

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.variants[0].color)
  const [selectedStorage, setSelectedStorage] = useState(product.variants[0].storage)
  const { addToCart } = useCart()

  // Get unique colors and storage options
  const colors = Array.from(new Set(product.variants.map((variant) => variant.color)))
  const storageOptions = Array.from(new Set(product.variants.map((variant) => variant.storage)))

  // Find the selected variant
  const selectedVariant =
    product.variants.find((variant) => variant.color === selectedColor && variant.storage === selectedStorage) ||
    product.variants[0]

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${selectedVariant.color}-${selectedVariant.storage}`,
      productId: product.id,
      name: product.name,
      price: selectedVariant.price,
      color: selectedVariant.color,
      storage: selectedVariant.storage,
      image: selectedVariant.images[0],
      quantity: 1,
    })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ImageGallery images={selectedVariant.images} />

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold mt-2">${selectedVariant.price}</p>
        </div>

        <div className="space-y-4">
          <OptionsSelector label="Color" options={colors} selectedOption={selectedColor} onChange={setSelectedColor} />

          <OptionsSelector
            label="Storage"
            options={storageOptions}
            selectedOption={selectedStorage}
            onChange={setSelectedStorage}
            priceMap={storageOptions.reduce(
              (acc, storage) => {
                const variant = product.variants.find((v) => v.storage === storage && v.color === selectedColor)
                if (variant) {
                  acc[storage] = variant.price
                }
                return acc
              },
              {} as Record<string, number>,
            )}
          />
        </div>

        <div className="py-4">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <Button size="lg" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>

      <div className="lg:col-span-2">
        <Reviews productId={product.id} />
      </div>
    </div>
  )
}

