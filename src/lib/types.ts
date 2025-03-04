export interface Product {
  id: string;
  name: string;
  description: string;
  variants: Variant[];
}

export interface Variant {
  color: string;
  storage: string;
  price: number;
  images: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  color: string;
  storage: string;
  image: string;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}