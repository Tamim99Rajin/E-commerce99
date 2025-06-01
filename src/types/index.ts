export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  division: string;
  isDefault: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  tags?: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'bkash' | 'nagad' | 'googlepay' | 'cod';
  paymentStatus: 'pending' | 'paid' | 'failed';
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories?: Category[];
}

export type PaymentMethod = 'bkash' | 'nagad' | 'googlepay' | 'cod';