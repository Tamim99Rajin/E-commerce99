import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Home } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function OrderSuccessPage() {
  // Generate a random order ID
  const orderId = `BNG${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 md:p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">অর্ডার সফলভাবে প্লেস করা হয়েছে!</h1>
          <p className="text-gray-600 mb-6">
            আপনার অর্ডার সফলভাবে প্লেস করা হয়েছে। অর্ডার ট্র্যাকিং আপডেট পেতে আপনার ইমেইল চেক করুন।
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-500">অর্ডার নাম্বার</p>
                <p className="font-medium">{orderId}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-sm text-gray-500">তারিখ</p>
                <p className="font-medium">{new Date().toLocaleDateString('bn-BD')}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-2">
              <Package className="h-4 w-4 mr-1 text-primary-600" />
              <span>আপনার অর্ডারের বর্তমান স্ট্যাটাস: </span>
              <span className="font-medium text-primary-600 ml-1">প্রসেসিং</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center">
            <Link to="/orders">
              <Button variant="primary">
                আপনার অর্ডার দেখুন
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-gray-300">
                <Home className="h-4 w-4 mr-2" />
                হোম পেজে ফিরে যান
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-primary-50 border-t border-primary-100 p-6">
          <h2 className="text-lg font-semibold mb-4">পরবর্তী ধাপ</h2>
          <ol className="relative border-l border-primary-200 ml-3">
            <li className="mb-6 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-100 rounded-full -left-3 ring-8 ring-primary-50">
                <span className="text-primary-800 font-bold">1</span>
              </span>
              <h3 className="font-semibold text-gray-900">অর্ডার কনফার্মেশন</h3>
              <p className="text-sm text-gray-600">
                আপনার অর্ডার রিভিউ করা হচ্ছে। এসএমএস বা ইমেইলে কনফার্মেশন পাবেন।
              </p>
            </li>
            <li className="mb-6 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-100 rounded-full -left-3 ring-8 ring-primary-50">
                <span className="text-primary-800 font-bold">2</span>
              </span>
              <h3 className="font-semibold text-gray-900">অর্ডার প্রসেসিং</h3>
              <p className="text-sm text-gray-600">
                আপনার অর্ডারটি প্যাক করা হবে এবং শিপিংয়ের জন্য প্রস্তুত করা হবে।
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-100 rounded-full -left-3 ring-8 ring-primary-50">
                <span className="text-primary-800 font-bold">3</span>
              </span>
              <h3 className="font-semibold text-gray-900">ডেলিভারি</h3>
              <p className="text-sm text-gray-600">
                আপনার অর্ডার ডেলিভারি করা হবে আপনার প্রদত্ত ঠিকানায়। আপনি ট্র্যাকিং আপডেট পাবেন।
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}