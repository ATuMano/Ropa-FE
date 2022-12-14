export interface Product {
  brand: string;
  color: string;
  currency: string;
  detail: string;
  id: string;
  name: string;
  photo1: string;
  photo2: string;
  photo3: string;
  price: string;
  size: string;
  quantity: number;
}

export interface ShoppingCart {
  show: boolean;
  products: Product[];
}
