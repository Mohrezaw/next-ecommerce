"use client"

import type { ReactNode } from "react"
import { CartProvider } from "@/lib/cart-context"
import { ReviewsProvider } from "@/lib/reviews-context"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <ReviewsProvider>{children}</ReviewsProvider>
    </CartProvider>
  )
}

