import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Product } from "@/lib/types";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const defaultVariant = product.variants[0];
  const defaultImage = defaultVariant.images[0];

  const prices = product.variants.map((variant) => variant.price)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  const priceDisplay = minPrice === maxPrice ? `$${minPrice}` : `$${minPrice} - $${maxPrice}`
  return (
    <Card>
      <CardHeader>
        <Image
          src={defaultImage || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center rounded-md"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>
            <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{priceDisplay}</p>
            </div>
        </CardTitle>
        <CardDescription className="mt-3 line-clamp-3">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>See More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
