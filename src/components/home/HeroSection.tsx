import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 to-primary-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4">
              আপনার পছন্দের সব কিছু এখন <span className="text-secondary-300">একটি প্ল্যাটফর্মে</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন শপিং প্ল্যাটফর্ম। বিকাশ, নগদ এবং গুগল পে দিয়ে সহজেই পেমেন্ট করুন।
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-primary-700 hover:bg-gray-100 transition-all"
              >
                এখনই কিনুন
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 transition-all"
              >
                অফার দেখুন
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="Customer" className="h-10 w-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" alt="Customer" className="h-10 w-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg" alt="Customer" className="h-10 w-10 rounded-full border-2 border-white" />
              </div>
              <p className="ml-4 text-sm">
                <span className="font-semibold">৫০,০০০+</span> সন্তুষ্ট গ্রাহক
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-white/20 rotate-3 transform hover:rotate-0 transition-transform">
                <img 
                  src="https://images.pexels.com/photos/6214478/pexels-photo-6214478.jpeg" 
                  alt="Shopping experience" 
                  className="w-full h-auto rounded" 
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary-500 rounded-lg px-4 py-2 shadow-lg">
                <span className="text-white font-bold">৩০% পর্যন্ত ছাড়!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}