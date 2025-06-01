import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cart';
import { formatCurrency } from '../lib/utils';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { PaymentMethods } from '../components/checkout/PaymentMethods';
import { PaymentMethod } from '../types';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bkash');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process order
    alert('অর্ডার সফলভাবে প্লেস করা হয়েছে!');
    clearCart();
    navigate('/order-success');
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  const shippingCost = 100;
  const total = getTotalPrice() + shippingCost;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">চেকআউট</h1>
      
      <form onSubmit={handleSubmit} className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">শিপিং ঠিকানা</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="নাম"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="আপনার পূর্ণ নাম"
                />
                
                <Input
                  label="ফোন নাম্বার"
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="০১XXXXXXXXX"
                />
                
                <Input
                  label="ইমেইল (ঐচ্ছিক)"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="আপনার ইমেইল"
                />
                
                <div className="md:col-span-2">
                  <Input
                    label="পূর্ণ ঠিকানা"
                    id="address"
                    name="address"
                    required
                    placeholder="রোড, বাসা নং, এরিয়া"
                  />
                </div>
                
                <Input
                  label="শহর"
                  id="city"
                  name="city"
                  required
                  placeholder="আপনার শহর"
                />
                
                <Input
                  label="পোস্টাল কোড"
                  id="postalCode"
                  name="postalCode"
                  required
                  placeholder="পোস্টাল কোড"
                />
                
                <div className="md:col-span-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="saveAddress"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      আমার এই ঠিকানাটি সংরক্ষণ করুন
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="p-6">
              <PaymentMethods
                selectedMethod={paymentMethod}
                onSelectMethod={setPaymentMethod}
              />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-20">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">অর্ডার সামারি</h2>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">অর্ডার আইটেম ({items.length})</h3>
                <div className="max-h-60 overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={item.productId} className="flex py-2 border-b border-gray-200 last:border-0">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-3 flex flex-1 flex-col">
                        <div className="flex justify-between text-sm font-medium">
                          <h4 className="text-gray-900 line-clamp-1">{item.product.title}</h4>
                          <p className="text-gray-900">
                            {formatCurrency(
                              (item.product.discountedPrice || item.product.price) * item.quantity
                            )}
                          </p>
                        </div>
                        <div className="flex items-end justify-between mt-1 text-xs text-gray-500">
                          <p>পরিমাণ: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">উপমোট</span>
                  <span className="text-gray-900 font-medium">{formatCurrency(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">শিপিং চার্জ</span>
                  <span className="text-gray-900 font-medium">{formatCurrency(shippingCost)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">মোট</span>
                    <span className="text-lg font-semibold">{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>
              
              <Button variant="primary" size="lg" fullWidth type="submit">
                অর্ডার কনফার্ম করুন
              </Button>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                "অর্ডার কনফার্ম করুন" বাটনে ক্লিক করে আপনি আমাদের 
                <a href="/terms" className="text-primary-600"> ব্যবহারের শর্তাবলী </a>
                এবং 
                <a href="/privacy-policy" className="text-primary-600"> গোপনীয়তা নীতি </a>
                মেনে নিচ্ছেন।
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}