import { ChevronRight } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

export default function BestSellers() {
  return (
    <div className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            {/* Accent line with floating dots */}
            <div className="relative w-16 mb-4">
              <div className="h-1 bg-gradient-to-r from-primary-500 to-purple-500"></div>
              <div className="absolute -left-2 -top-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow"></div>
              <div className="absolute -right-2 -bottom-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Best Sellers</h2>
            <p className="text-gray-400 max-w-lg">Our most popular products that fitness enthusiasts love and recommend.</p>
          </div>
          
          <a 
            href="#" 
            className="group mt-4 md:mt-0 inline-flex items-center px-5 py-2 glass-hover rounded-full text-gray-300 hover:text-white transition-all duration-300"
          >
            View All Products
            <ChevronRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        {/* Products grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Stats banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              ),
              title: "Premium Quality",
              description: "Lab-tested supplements and equipment"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              ),
              title: "Free Shipping",
              description: "On all orders over $75"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Satisfaction Guarantee",
              description: "30-day money-back guarantee"
            }
          ].map((item, index) => (
            <div key={index} className="glass card-hover rounded-xl p-6 flex items-center group">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary-400 mr-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-gradient">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary-500/10 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-500/10 rounded-br-3xl"></div>
    </div>
  );
}