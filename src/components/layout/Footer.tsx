import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">বাংলাশপ</h3>
            <p className="text-gray-300 mb-4">
              বাংলাদেশের অন্যতম প্রধান ই-কমার্স প্ল্যাটফর্ম, যেখানে আপনি সেরা মানের পণ্য পাবেন সেরা মূল্যে।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">যোগাযোগ</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">সাধারণ প্রশ্ন</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white">গোপনীয়তা নীতি</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">ব্যবহারের শর্তাবলী</Link></li>
              <li><Link to="/return-policy" className="text-gray-300 hover:text-white">রিটার্ন নীতি</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ক্যাটাগরি</h3>
            <ul className="space-y-2">
              <li><Link to="/category/clothing" className="text-gray-300 hover:text-white">পোশাক</Link></li>
              <li><Link to="/category/electronics" className="text-gray-300 hover:text-white">ইলেকট্রনিক্স</Link></li>
              <li><Link to="/category/food" className="text-gray-300 hover:text-white">খাবার</Link></li>
              <li><Link to="/category/home" className="text-gray-300 hover:text-white">হোম এবং লাইফস্টাইল</Link></li>
              <li><Link to="/category/beauty" className="text-gray-300 hover:text-white">বিউটি এবং হেলথ</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">১২৩ আজিমপুর রোড, ঢাকা-১২০৫, বাংলাদেশ</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+৮৮০ ১৭১২ ৩৪৫৬৭৮</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@banglashop.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-base font-medium mb-2">পেমেন্ট অপশন</h4>
              <div className="flex space-x-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Bkash_logo.png" 
                     alt="বিকাশ" className="h-8 object-contain bg-white rounded p-1" />
                <img src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" 
                     alt="নগদ" className="h-8 object-contain bg-white rounded p-1" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg" 
                     alt="গুগল পে" className="h-8 object-contain bg-white rounded p-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} বাংলাশপ। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}