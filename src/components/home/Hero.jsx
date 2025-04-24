import { useState, useEffect } from 'react';
import { ChevronRight, ShoppingBag, Dumbbell, Star } from 'lucide-react';
import Logo from "../../Assets/img/PreWorkout.png";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Main background */}
      <div className="absolute inset-0 bg-dark-950"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-dark-950 to-purple-500/10 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)] animate-pulse-slow"></div>
      </div>
      
      {/* Ambient light effects */}
      <div 
        className="absolute top-40 -left-20 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"
        style={{
          animationDelay: '1s',
          transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`
        }}
      ></div>
      
      {/* Interactive particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-24 md:pt-0">
        <div className="md:flex md:items-center md:justify-between">
          {/* Text content */}
          <div 
            className={`md:w-1/2 lg:w-5/12 transition-all duration-1000 ease-out transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Animated accent line with floating dots */}
            <div className="relative w-20 mb-6 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary-500 to-purple-500 animate-gradient-x"></div>
              <div className="absolute -left-2 -top-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow"></div>
              <div className="absolute -right-2 -bottom-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 relative">
              <span className="block relative">
                Fuel Your
                <div className="absolute -right-4 top-0 w-8 h-8">
                  <Star className="w-full h-full text-yellow-400 animate-spin-slow" />
                </div>
              </span>
              <span className="relative inline-block">
                <span className="text-gradient bg-gradient-to-r from-primary-400 to-purple-500 animate-gradient-x bg-[length:200%_100%]">
                  Fitness Journey
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></div>
              </span>
            </h1>
            
            <div className="md:w-1/2 lg:w-5/12">
              {/* ...existing code... */}
              <div className="relative">
                <p className="text-lg text-gray-300 mb-8 max-w-lg">
                  Premium protein supplements and top-quality gym equipment to help you reach your fitness goals faster than ever before.
                </p>
                <div className="absolute -left-4 top-1/2 w-0.5 h-0 bg-gradient-to-b from-primary-500 to-transparent animate-expand-line"></div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-modern group px-6 py-3 rounded-full text-white font-medium flex items-center justify-center relative overflow-hidden hover:shadow-glow transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    <ShoppingBag size={18} className="mr-2" />
                    Shop Protein
                    <ChevronRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="glass-hover group px-6 py-3 rounded-full text-gray-200 font-medium flex items-center justify-center border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                  <span className="flex items-center">
                    <Dumbbell size={18} className="mr-2 transition-transform group-hover:rotate-12" />
                    Equipment
                    <ChevronRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
              
              {/* Animated stats with glass effect */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                {[
                  { value: '25K+', label: 'Active Users', delay: 0 },
                  { value: '90%', label: 'Success Rate', delay: 100 },
                  { value: '4.9', label: 'User Rating', delay: 200 }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className={`glass rounded-xl p-4 text-center group hover:scale-105 transition-all duration-300 transform ${
                      isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${stat.delay + 700}ms` }}
                  >
                    <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary-400 to-purple-500 animate-gradient-x bg-[length:200%_100%]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                    <div className="absolute inset-0 rounded-xl border-2 border-primary-500/0 group-hover:border-primary-500/20 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div 
            className={`md:w-1/2 lg:w-6/12 flex justify-center md:justify-end mt-12 md:mt-0 transition-all duration-1000 delay-300 ease-out transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated glow effect */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 opacity-30 blur-2xl animate-pulse-slow"
                style={{
                  transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                }}
              ></div>
              
              {/* Interactive animated rings */}
              <div 
                className="absolute inset-5 rounded-full border border-primary-500/30 animate-ping-slow"
                style={{
                  transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
                }}
              ></div>
              <div 
                className="absolute inset-10 rounded-full border border-purple-500/20 animate-ping-slow"
                style={{
                  animationDelay: '1s',
                  transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px)`
                }}
              ></div>
              
              {/* Product container with parallax effect */}
              <div className="relative h-full w-full rounded-full glass p-2 backdrop-blur-sm border border-white/10 shadow-2xl group hover:border-primary-500/30 transition-all duration-300">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-dark-900/80 to-transparent opacity-80"></div>
                  <img 
                    src={Logo}
                    alt="Premium protein product"
                    className="h-full w-full object-cover rounded-full p-2 animate-float transform transition-transform duration-300 group-hover:scale-105"
                    style={{
                      transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
                    }}
                  />
                </div>
                
                {/* Floating badges with mouse parallax */}
                <div 
                  className="absolute -right-4 top-10 glass px-4 py-2 rounded-full text-white text-sm font-medium animate-float backdrop-blur-md"
                  style={{
                    animationDelay: '0.5s',
                    transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`
                  }}
                >
                  New Release
                </div>
                
                {[
                  { text: 'Premium Quality', delay: '0.7s', position: '-left-16 top-1/4' },
                  { text: 'Lab Tested', delay: '1s', position: '-right-12 bottom-1/4' }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className={`absolute ${badge.position} glass px-3 py-1 rounded-full text-xs text-primary-400 animate-float backdrop-blur-md`}
                    style={{
                      animationDelay: badge.delay,
                      transform: `translate(${mousePosition.x * (index ? 0.1 : -0.1)}px, ${mousePosition.y * 0.1}px)`
                    }}
                  >
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}