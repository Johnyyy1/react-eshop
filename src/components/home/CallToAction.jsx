import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 bg-dark-950 relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Container for content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden group">
          {/* Background shine animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
            <div className="flex-1">
              {/* Accent line with floating dots */}
              <div className="relative w-16 mb-4">
                <div className="h-1 bg-gradient-to-r from-primary-500 to-purple-500"></div>
                <div className="absolute -left-2 -top-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow"></div>
                <div className="absolute -right-2 -bottom-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Transform Your Fitness Journey?</h2>
              <p className="text-gray-300 max-w-2xl">Join thousands of satisfied customers and experience the difference with our premium products designed to elevate your performance.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              <button className="btn-modern group px-6 py-3 rounded-full text-white font-medium flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="glass-hover group px-6 py-3 rounded-full text-gray-200 font-medium flex items-center justify-center space-x-2 border border-white/10">
                <span>Learn More</span>
                <span className="transform transition-transform group-hover:translate-x-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-500/20 rounded-tl-xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-purple-500/20 rounded-br-xl"></div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Premium Quality",
              description: "Lab-tested supplements and equipment"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ),
              title: "Free Shipping",
              description: "On orders over $75"
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Money-Back Guarantee",
              description: "30-day satisfaction guarantee"
            }
          ].map((item, index) => (
            <div key={index} className="glass card-hover p-6 rounded-xl flex items-center">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary-400 mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}