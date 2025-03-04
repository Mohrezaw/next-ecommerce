"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { Review } from "./types"

interface ReviewsContextType {
  reviews: Review[]
  addReview: (review: Review) => void
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined)

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([])

  // Load reviews from localStorage on initial render
  useEffect(() => {
    const savedReviews = localStorage.getItem("reviews")
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews))
      } catch (error) {
        console.error("Failed to parse reviews from localStorage:", error)
      }
    }
  }, [])

  // Save reviews to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews))
  }, [reviews])

  const addReview = (newReview: Review) => {
    setReviews((prevReviews) => [...prevReviews, newReview])
  }

  return <ReviewsContext.Provider value={{ reviews, addReview }}>{children}</ReviewsContext.Provider>
}

export function useReviews() {
  const context = useContext(ReviewsContext)
  if (context === undefined) {
    throw new Error("useReviews must be used within a ReviewsProvider")
  }
  return context
}

