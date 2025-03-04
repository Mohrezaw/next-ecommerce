"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Product image"
          width={500}
          height={500}
          className="h-full md:min-h-[500px] w-full object-cover object-center"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto p-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square w-20 overflow-hidden rounded-md ${
                selectedImage === index ? "ring-2 ring-primary" : "ring-1 ring-gray-200"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                width={200}
                height={200}
                className="h-full w-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

