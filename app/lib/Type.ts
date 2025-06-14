export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand?: string;
  thumbnail: string;
  images?: string[];
  rating?: number;
  discountPercentage: number;
}

export interface CartProduct extends Product {
  quantity: number;
}
