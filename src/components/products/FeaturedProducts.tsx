import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { featuredProducts } from '../../data/products';

export function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800">
            আকর্ষণীয় পণ্য
          </h2>
          <Link 
            to="/products" 
            className="text-primary-600 hover:text-primary-700 flex items-center text-sm font-medium"
          >
            সব দেখুন
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}