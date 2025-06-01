import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export function CategorySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-gray-800">শপিং ক্যাটাগরি</h2>
          <p className="text-gray-600 mt-2">আপনার পছন্দের ক্যাটাগরি বেছে নিন</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
                  <h3 className="font-medium text-lg">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}