import { ChevronRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

export default function BestSellers() {
  return (
    <div className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Best Sellers</h2>
            <p className="text-gray-400 max-w-lg">Our most popular products that fitness enthusiasts love and recommend.</p>
          </div>
          
          <a 
            href="#" 
            className="group mt-4 md:mt-0 inline-flex items-center px-5 py-2 border btn-grad-darkblue border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            View All Products
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">
              <ChevronRight size={18} />
            </span>
          </a>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="transform transition-transform duration-500 hover:-translate-y-2"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Stats banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L12 3L4 7M20 7V17L12 21M20 7L12 11M12 21L4 17V7M12 21V11M4 7L12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Premium Quality</h3>
              <p className="text-gray-400 text-sm">Lab-tested supplements and equipment</p>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 flex items-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8H19M5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6C21 7.10457 20.1046 8 19 8M5 8L5 18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V8M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Free Shipping</h3>
              <p className="text-gray-400 text-sm">On all orders over $75</p>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 flex items-center">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Satisfaction Guarantee</h3>
              <p className="text-gray-400 text-sm">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}