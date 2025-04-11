import { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
      <section className="py-24 bg-gray-950 relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-2/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Container for content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Testimonials</h2>
            <p className="text-gray-400 max-w-lg">Real results from real fitness enthusiasts who have transformed their journey with our premium products.</p>
          </div>
          
          <a 
            href="#" 
            className="group mt-4 md:mt-0 inline-flex items-center px-5 py-2 border border-white/10 btn-grad-darkblue  rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            View All Reviews
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transform transition-transform duration-500 hover:-translate-y-2 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 h-full">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11L8 17H5L7 11V7H10V11ZM18 11L16 17H13L15 11V7H18V11Z" fill="currentColor" />
                  </svg>
                </div>
                
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                
                {/* Author */}
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10" 
                  />
                  <div className="ml-3">
                    <h4 className="font-medium text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-full">
            <span className="text-gray-400 mr-3">Trusted by athletes worldwide</span>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4F46E5" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-white font-medium">4.9/5 average rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}