import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'রহিম আহমেদ',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'বাংলাশপ থেকে আমি একটি ল্যাপটপ কিনেছিলাম। ডেলিভারি খুব দ্রুত হয়েছে এবং প্রোডাক্টের মান ছিল অসাধারণ। বিকাশ পেমেন্ট অপশন ব্যবহার করে আমি খুব সহজেই অর্ডার কমপ্লিট করতে পেরেছি।',
    rating: 5,
    position: 'সফটওয়্যার ইঞ্জিনিয়ার',
  },
  {
    id: '2',
    name: 'সাবরিনা খাতুন',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    text: 'নগদ পেমেন্ট সিস্টেম অসাধারণ। আমি বিভিন্ন ফ্যাশন আইটেম কিনেছি এবং মান নিয়ে কোন সমস্যা হয়নি। কাস্টমার সাপোর্ট খুব ভালো, আমার যেকোনো প্রশ্নের উত্তর দ্রুত দিয়েছে।',
    rating: 4,
    position: 'মার্কেটিং এক্সিকিউটিভ',
  },
  {
    id: '3',
    name: 'করিম হোসেন',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    text: 'অসাধারণ শপিং অভিজ্ঞতা! দ্রুত ডেলিভারি এবং পণ্যের মান অত্যন্ত ভালো। আমি বিশেষ করে পেমেন্ট সিস্টেমের সহজতা নিয়ে খুবই সন্তুষ্ট।',
    rating: 5,
    position: 'ব্যবসায়ী',
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800">আমাদের গ্রাহকদের মতামত</h2>
          <p className="text-gray-600 mt-2">আমাদের সন্তুষ্ট গ্রাহকরা কী বলছেন</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-lg text-center">{currentTestimonial.name}</h3>
                <p className="text-gray-600 text-sm text-center">{currentTestimonial.position}</p>
                <div className="flex text-yellow-400 mt-2">
                  {'★'.repeat(currentTestimonial.rating)}
                  {'☆'.repeat(5 - currentTestimonial.rating)}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <svg className="h-12 w-12 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg md:text-xl italic text-gray-800 leading-relaxed">
                  {currentTestimonial.text}
                </p>
              </div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 transform translate-y-1/2">
              <button 
                onClick={handlePrev}
                className="bg-white rounded-full p-2 shadow-md hover:bg-primary-50"
              >
                <ChevronLeft className="h-6 w-6 text-primary-600" />
              </button>
              <button 
                onClick={handleNext}
                className="bg-white rounded-full p-2 shadow-md hover:bg-primary-50"
              >
                <ChevronRight className="h-6 w-6 text-primary-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}