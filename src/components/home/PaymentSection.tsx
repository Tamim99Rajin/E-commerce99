import { Shield, Truck, RotateCcw, HeadphonesIcon } from 'lucide-react';

export function PaymentSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-gray-800">নিরাপদ পেমেন্ট ও ডেলিভারি</h2>
          <p className="text-gray-600 mt-2">আমাদের বিভিন্ন পেমেন্ট মেথড ও সুবিধা</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center transition-transform hover:scale-105">
            <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">নিরাপদ পেমেন্ট</h3>
            <p className="text-gray-600 text-sm">আপনার সব তথ্য এনক্রিপ্টেড এবং সুরক্ষিত</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center transition-transform hover:scale-105">
            <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <Truck className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">দ্রুত ডেলিভারি</h3>
            <p className="text-gray-600 text-sm">ঢাকার ভিতরে ২৪ ঘন্টা, দেশের সব জায়গায় ৪৮-৭২ ঘন্টা</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center transition-transform hover:scale-105">
            <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <RotateCcw className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">সহজ রিটার্ন</h3>
            <p className="text-gray-600 text-sm">৭ দিনের মধ্যে যেকোনো পণ্য ফেরত দিন</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center transition-transform hover:scale-105">
            <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <HeadphonesIcon className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">২৪/৭ সাপোর্ট</h3>
            <p className="text-gray-600 text-sm">আমাদের কাস্টমার কেয়ার সবসময় আপনার পাশে</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">আমাদের পেমেন্ট পার্টনার</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Bkash_logo.png" 
                   alt="বিকাশ" className="h-10 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" 
                   alt="নগদ" className="h-10 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg" 
                   alt="গুগল পে" className="h-10 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img src="https://seeklogo.com/images/C/cash-on-delivery-logo-0ABFC93B4F-seeklogo.com.png" 
                   alt="ক্যাশ অন ডেলিভারি" className="h-10 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}