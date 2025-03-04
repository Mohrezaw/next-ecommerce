"use client";

import { ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import CartItems from "./CartItems";
import { useCart } from "@/lib/cart-context";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart } = useCart()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
  return (
    <header className="flex justify-between items-center container p-4 border-b border-gray-200 mx-auto">
      <Link href="/" className="text-2xl font-bold text-slate-900">
        Next E-Commerce
      </Link>
      <Button variant="outline" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>

        {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CartItems />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
