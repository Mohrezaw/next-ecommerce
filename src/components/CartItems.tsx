"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartItems() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <p className="text-gray-500 mb-4">Your cart is empty</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto py-4">
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex gap-4">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <div className="flex justify-between text-base font-medium">
                  <h3>{item.name}</h3>
                  <p className="ml-4">${item.price}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {item.color} / {item.storage}
                </p>

                <div className="flex items-center justify-between mt-2 ">
                  <div className="flex items-center border rounded-md">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-1">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t pt-4 pb-14">
        <div className="flex justify-between text-base font-medium">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

