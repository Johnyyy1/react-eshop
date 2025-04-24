import { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Container for content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          {/* Accent line with floating dots */}
          <div className="inline-flex relative">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mb-4"></div>
            <div className="absolute -left-2 -top-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow"></div>
            <div className="absolute -right-2 -bottom-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from real fitness enthusiasts who have transformed their journey with our premium products.
          </p>
        </div>
        
        {/* Testimonial cards with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex justify-center">
          <div className="glass rounded-full px-8 py-4 inline-flex items-center space-x-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400 mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.995 6.9a.998.998 0 00-.548-.795 1 1 0 00-.883-.036C16.49 7.668 14.033 7.442 12 6.35c-2.033 1.093-4.49 1.318-7.564-.182a1 1 0 00-.883.036.998.998 0 00-.548.795 22.355 22.355 0 00.073 7.398A9.27 9.27 0 007.7 20.962a.997.997 0 001.078-.262L12 17.023l3.222 3.677a.997.997 0 001.078.262 9.271 9.271 0 004.622-6.564 22.354 22.354 0 00.073-7.399z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">Trusted by athletes</div>
                <div className="text-gray-400 text-sm">Worldwide recognition</div>
              </div>
            </div>
            
            <div className="h-8 w-px bg-white/10"></div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400 mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="text-white font-medium">4.9/5 rating</div>
                <div className="text-gray-400 text-sm">Customer satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary-500/10 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-500/10 rounded-br-3xl"></div>
    </section>
  );
}