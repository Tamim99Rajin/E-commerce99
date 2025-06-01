import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { useCartStore } from '../../store/cart';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  
  const discountPercentage = product.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) 
    : 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {product.discountedPrice && (
          <div className="absolute top-2 left-2 bg-secondary-500 text-white text-sm font-medium px-2 py-1 rounded">
            -{discountPercentage}%
          </div>
        )}
        
        <button 
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist
          }}
        >
          <Heart className="h-5 w-5 text-gray-500 hover:text-secondary-500" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-1">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(product.rating))}
            {'☆'.repeat(5 - Math.floor(product.rating))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.title}</h3>
        
        <div className="flex items-baseline mb-3">
          {product.discountedPrice ? (
            <>
              <span className="text-lg font-bold text-gray-900">{formatCurrency(product.discountedPrice)}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">{formatCurrency(product.price)}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">{formatCurrency(product.price)}</span>
          )}
        </div>
        
        <Button 
          variant="primary"
          size="sm"
          fullWidth
          onClick={handleAddToCart}
          className="opacity-90 group-hover:opacity-100"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          কার্টে যোগ করুন
        </Button>
      </div>
    </Link>
  );
}