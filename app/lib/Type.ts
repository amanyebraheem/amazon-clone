export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images?: string[];
  quantity?: number;
   discountPercentage?: number;
}

