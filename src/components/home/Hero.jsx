import { useState, useEffect } from 'react';
import { ChevronRight, ShoppingBag, Dumbbell } from 'lucide-react';
// If using Vite, import from assets folder
import Logo from "../../assets/img/NewRelease2Better.png";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-purple-900/30 z-0"></div>
      
      {/* Background ambient light */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 z-10 pt-24 md:pt-0">
        <div className="md:flex md:items-center md:justify-between">
          {/* Text content with animated reveal */}
          <div 
            className={`md:w-1/2 lg:w-5/12 transition-all duration-1000 ease-out transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Accent line */}
            <div className="w-20 h-1 mb-6 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="block">Fuel Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Fitness Journey</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Premium protein supplements and top-quality gym equipment to help you reach your fitness goals faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-6 py-3 rounded-full overflow-hidden bg-gradient-to-r btn-grad-blue text-white font-medium flex items-center justify-center transform transition-all duration-300 hover:scale-45 shadow-lg hover:shadow-blue-500/30">
                <span className="relative z-10 flex items-center">
                  <ShoppingBag size={18} className="mr-2" />
                  Shop Protein
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={18} />
                  </span>
                </span>
              </button>
              
              <button className="group relative px-6 py-3 rounded-full overflow-hidden border border-white/20 btn-grad-black text-gray-200 font-medium flex items-center justify-center transform transition-all">
                <span className="relative z-10 flex items-center">
                  <Dumbbell size={18} className="mr-2" />
                  Equipment
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={18} />
                  </span>
                </span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">90%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-sm text-gray-400">User Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero image with effects */}
          <div 
            className={`md:w-1/2 lg:w-6/12 flex justify-center md:justify-end transition-all duration-1000 delay-300 ease-out transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-30 blur-2xl"></div>
              
              {/* Rings animation */}
              <div className="absolute inset-5 rounded-full border border-blue-500/30 animate-ping-slow"></div>
              <div className="absolute inset-10 rounded-full border border-indigo-500/20 animate-ping-slow animation-delay-1000"></div>
              
              {/* Product image */}
              <div className="relative h-full w-full rounded-full bg-gradient-to-br from-blue-900/80 to-indigo-900/80 p-2 backdrop-blur-sm border border-white/10 shadow-2xl">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent opacity-80"></div>
                  <img 
                    src={Logo}
                    alt="Premium protein product"
                    className="h-full w-full object-cover rounded-full p-2"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -right-4 top-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full py-2 px-4 text-white text-sm font-medium shadow-lg">
                  New Release
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}