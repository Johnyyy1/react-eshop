import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Container for content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-8 md:p-12">
            <div className="flex-1">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to Transform Your Fitness Journey?</h2>
              <p className="text-gray-400 max-w-2xl">Join thousands of satisfied customers and experience the difference with our premium products designed to elevate your performance.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              <a 
                href="#" 
                className="group inline-flex items-center btn-grad-darkblue justify-center px-6 py-3 rounded-full"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#" 
                className="group inline-flex items-center btn-grad-black-lowcase justify-center px-6 py-3 rounded-full"
              >
                Learn More
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-full">
              <span className="text-gray-400 mr-3">Trusted by athletes worldwide</span>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4F46E5" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-white font-medium">Satisfaction guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}