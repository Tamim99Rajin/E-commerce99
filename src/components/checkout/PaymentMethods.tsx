import { useState } from 'react';
import { PaymentMethod } from '../../types';
import { cn } from '../../lib/utils';

interface PaymentMethodsProps {
  selectedMethod: PaymentMethod;
  onSelectMethod: (method: PaymentMethod) => void;
}

export function PaymentMethods({ selectedMethod, onSelectMethod }: PaymentMethodsProps) {
  const handleMethodChange = (method: PaymentMethod) => {
    onSelectMethod(method);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">পেমেন্ট মেথড বাছাই করুন</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <PaymentMethodCard 
          id="bkash"
          name="বিকাশ"
          image="https://upload.wikimedia.org/wikipedia/commons/5/5b/Bkash_logo.png"
          isSelected={selectedMethod === 'bkash'}
          onClick={() => handleMethodChange('bkash')}
        />
        
        <PaymentMethodCard 
          id="nagad"
          name="নগদ"
          image="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
          isSelected={selectedMethod === 'nagad'}
          onClick={() => handleMethodChange('nagad')}
        />
        
        <PaymentMethodCard 
          id="googlepay"
          name="গুগল পে"
          image="https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg"
          isSelected={selectedMethod === 'googlepay'}
          onClick={() => handleMethodChange('googlepay')}
        />
        
        <PaymentMethodCard 
          id="cod"
          name="ক্যাশ অন ডেলিভারি"
          image="https://seeklogo.com/images/C/cash-on-delivery-logo-0ABFC93B4F-seeklogo.com.png"
          isSelected={selectedMethod === 'cod'}
          onClick={() => handleMethodChange('cod')}
        />
      </div>
      
      {selectedMethod === 'bkash' && (
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200 mt-4">
          <h4 className="font-medium text-primary-800 mb-2">বিকাশ পেমেন্ট নির্দেশনা</h4>
          <p className="text-gray-700 text-sm mb-2">
            অর্ডার কনফার্ম করার পর আপনি বিকাশ পেমেন্ট পেজে রিডাইরেক্ট হবেন। সেখানে আপনার বিকাশ নাম্বার দিয়ে পেমেন্ট কমপ্লিট করুন।
          </p>
          <div className="flex items-center mt-2">
            <span className="text-sm font-medium text-gray-500">বিকাশ মার্চেন্ট নাম্বার:</span>
            <span className="ml-2 text-primary-700 font-medium">01712-345678</span>
          </div>
        </div>
      )}
      
      {selectedMethod === 'nagad' && (
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200 mt-4">
          <h4 className="font-medium text-primary-800 mb-2">নগদ পেমেন্ট নির্দেশনা</h4>
          <p className="text-gray-700 text-sm mb-2">
            অর্ডার কনফার্ম করার পর আপনি নগদ পেমেন্ট পেজে রিডাইরেক্ট হবেন। সেখানে আপনার নগদ নাম্বার দিয়ে পেমেন্ট কমপ্লিট করুন।
          </p>
          <div className="flex items-center mt-2">
            <span className="text-sm font-medium text-gray-500">নগদ মার্চেন্ট নাম্বার:</span>
            <span className="ml-2 text-primary-700 font-medium">01712-345679</span>
          </div>
        </div>
      )}
      
      {selectedMethod === 'googlepay' && (
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200 mt-4">
          <h4 className="font-medium text-primary-800 mb-2">গুগল পে নির্দেশনা</h4>
          <p className="text-gray-700 text-sm mb-2">
            অর্ডার কনফার্ম করার পর আপনি গুগল পে-তে রিডাইরেক্ট হবেন। আপনার গুগল পে অ্যাকাউন্ট দিয়ে পেমেন্ট কমপ্লিট করুন।
          </p>
        </div>
      )}
      
      {selectedMethod === 'cod' && (
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200 mt-4">
          <h4 className="font-medium text-primary-800 mb-2">ক্যাশ অন ডেলিভারি নির্দেশনা</h4>
          <p className="text-gray-700 text-sm mb-2">
            আপনি প্রোডাক্ট ডেলিভারি পাওয়ার সময় ক্যাশ পেমেন্ট করতে পারবেন। অর্ডার কনফার্ম করার জন্য আপনার ঠিকানা দিন।
          </p>
          <p className="text-sm text-secondary-700">
            * ঢাকার বাইরে ক্যাশ অন ডেলিভারি করতে অর্ডারের ৫০% অগ্রিম পেমেন্ট করতে হবে।
          </p>
        </div>
      )}
    </div>
  );
}

interface PaymentMethodCardProps {
  id: string;
  name: string;
  image: string;
  isSelected: boolean;
  onClick: () => void;
}

function PaymentMethodCard({ id, name, image, isSelected, onClick }: PaymentMethodCardProps) {
  return (
    <div 
      className={cn(
        "border rounded-lg p-4 cursor-pointer transition-all",
        isSelected 
          ? "border-primary-500 bg-primary-50" 
          : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
      )}
      onClick={onClick}
    >
      <input 
        type="radio"
        id={id}
        name="paymentMethod"
        className="sr-only"
        checked={isSelected}
        onChange={() => {}}
      />
      <div className="flex flex-col items-center">
        <div className="h-12 flex items-center justify-center mb-2">
          <img src={image} alt={name} className="h-full object-contain" />
        </div>
        <label 
          htmlFor={id}
          className="text-sm font-medium text-center cursor-pointer"
        >
          {name}
        </label>
      </div>
    </div>
  );
}