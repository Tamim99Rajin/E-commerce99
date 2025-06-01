import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Share2, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { products } from '../data/products';
import { formatCurrency } from '../lib/utils';
import { useCartStore } from '../store/cart';
import { Button } from '../components/ui/Button';
import { FeaturedProducts } from '../components/products/FeaturedProducts';

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCartStore();
  
  // Find product by ID
  const product = products.find(p => p.id === id);
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">পণ্য খুঁজে পাওয়া যায়নি</h1>
        <p className="text-gray-600">দুঃখিত, আপনার খোঁজা পণ্যটি খুঁজে পাওয়া যায়নি।</p>
        <Button 
          variant="primary" 
          className="mt-6" 
          onClick={() => window.history.back()}
        >
          পিছনে যান
        </Button>
      </div>
    );
  }
  
  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  const discountPercentage = product.discountedPrice 
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100) 
    : 0;
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Product Images */}
            <div className="md:w-1/2">
              <div className="relative h-80 md:h-96 bg-gray-100">
                <img 
                  src={product.images[activeImageIndex]} 
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
                
                {product.discountedPrice && (
                  <div className="absolute top-4 left-4 bg-secondary-500 text-white text-sm font-medium px-2 py-1 rounded">
                    -{discountPercentage}%
                  </div>
                )}
                
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              
              {product.images.length > 1 && (
                <div className="flex space-x-2 mt-4 px-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-16 h-16 rounded border-2 ${
                        index === activeImageIndex ? 'border-primary-500' : 'border-gray-200'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} - image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-gray-500 ml-2">{product.reviews} রিভিউ</span>
              </div>
              
              <div className="mb-6">
                {product.discountedPrice ? (
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-gray-900">{formatCurrency(product.discountedPrice)}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">{formatCurrency(product.price)}</span>
                    <span className="ml-2 text-secondary-600 font-medium">({discountPercentage}% ছাড়)</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">{formatCurrency(product.price)}</span>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">বিবরণ</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? (
                      <>
                        <Check className="mr-1 h-3 w-3" />
                        স্টক আছে
                      </>
                    ) : 'স্টক নেই'}
                  </span>
                  
                  <span className="ml-4 text-sm text-gray-500">ক্যাটাগরি: {product.category}</span>
                </div>
              </div>
              
              {/* Quantity selector */}
              <div className="flex items-center mb-6">
                <span className="text-sm font-medium text-gray-700 mr-3">পরিমাণ:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={decrementQuantity}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Button 
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  কার্টে যোগ করুন
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="flex-1 border-gray-300"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  ইচ্ছেতালিকায় যোগ করুন
                </Button>
                
                <Button 
                  variant="ghost"
                  size="lg"
                  className="sm:flex-none"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Payment info */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-2">পেমেন্ট অপশন</h3>
                <div className="flex space-x-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Bkash_logo.png" 
                       alt="বিকাশ" className="h-8 object-contain" />
                  <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" 
                       alt="নগদ" className="h-8 object-contain" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg" 
                       alt="গুগল পে" className="h-8 object-contain" />
                  <img src="https://seeklogo.com/images/C/cash-on-delivery-logo-0ABFC93B4F-seeklogo.com.png" 
                       alt="ক্যাশ অন ডেলিভারি" className="h-8 object-contain" />
                </div>
              </div>
              
              {/* Delivery info */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">ডেলিভারি ইনফো</h3>
                <p className="text-sm text-gray-600">
                  ঢাকা সিটিতে ২৪ ঘন্টা, ঢাকার বাইরে ৪৮-৭২ ঘন্টার মধ্যে ডেলিভারি করা হয়।
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">সম্পর্কিত পণ্য</h2>
          <FeaturedProducts />
        </div>
      </div>
    </main>
  );
}