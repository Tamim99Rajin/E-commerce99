import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { formatCurrency } from '../lib/utils';
import { Button } from '../components/ui/Button';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h1 className="text-2xl font-bold mb-4">আপনার কার্ট খালি</h1>
          <p className="text-gray-600 mb-8">আপনার কার্টে এখনও কোন পণ্য যোগ করা হয়নি।</p>
          <Link to="/products">
            <Button variant="primary">শপিং শুরু করুন</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">শপিং কার্ট</h1>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">কার্টে থাকা পণ্য ({items.length})</h2>
              
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.productId} className="py-6 flex">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to={`/product/${item.productId}`} className="hover:text-primary-600">
                            {item.product.title}
                          </Link>
                        </h3>
                        <p className="ml-4">
                          {formatCurrency(
                            (item.product.discountedPrice || item.product.price) * item.quantity
                          )}
                        </p>
                      </div>
                      
                      <div className="flex items-end justify-between flex-1 text-sm">
                        <div>
                          <div className="text-gray-500 mb-1">মূল্য: {formatCurrency(item.product.discountedPrice || item.product.price)}</div>
                          <div className="mt-1 flex items-center">
                            <button
                              onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                              className="text-gray-500 focus:outline-none focus:text-gray-600 p-1"
                            >
                              -
                            </button>
                            <span className="mx-2 text-gray-700">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="text-gray-500 focus:outline-none focus:text-gray-600 p-1"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId)}
                          className="font-medium text-secondary-600 hover:text-secondary-500 flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          মুছুন
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button
              onClick={() => window.history.back()}
              variant="ghost"
              className="text-primary-600"
            >
              &larr; শপিং চালিয়ে যান
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">অর্ডার সামারি</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">উপমোট</span>
                  <span className="text-gray-900 font-medium">{formatCurrency(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">শিপিং চার্জ</span>
                  <span className="text-gray-900 font-medium">{formatCurrency(100)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">মোট</span>
                    <span className="text-lg font-semibold">{formatCurrency(getTotalPrice() + 100)}</span>
                  </div>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button variant="primary" size="lg" fullWidth>
                  চেকআউট করুন
                </Button>
              </Link>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">সাপোর্টেড পেমেন্ট মেথড</h3>
                <div className="flex space-x-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Bkash_logo.png" 
                       alt="বিকাশ" className="h-8 object-contain" />
                  <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" 
                       alt="নগদ" className="h-8 object-contain" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg" 
                       alt="গুগল পে" className="h-8 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}