import { useState, useEffect } from 'react';

export default function PageHeader({ title, description }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-primary-900/20 via-dark-950 to-dark-950"
        style={{
          transform: `translateY(${offset * 0.5}px)`
        }}
      ></div>
      
      {/* Animated light effects with parallax */}
      <div 
        className="absolute left-1/4 top-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{
          transform: `translate(${offset * 0.2}px, ${offset * 0.3}px)`
        }}
      ></div>
      <div 
        className="absolute right-1/4 bottom-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{
          animationDelay: '1s',
          transform: `translate(${offset * -0.2}px, ${offset * -0.3}px)`
        }}
      ></div>
      
      {/* Background pattern with subtle parallax */}
      <div 
        className="absolute inset-0 bg-pattern opacity-5"
        style={{
          transform: `translateY(${offset * 0.1}px)`
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          {/* Decorative element */}
          <div className="flex justify-center mb-6 relative">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-purple-500"></div>
            {/* Floating dots with enhanced parallax */}
            <div 
              className="absolute -left-4 -top-4 w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow"
              style={{
                transform: `translate(${offset * -0.5}px, ${offset * -0.5}px)`
              }}
            ></div>
            <div 
              className="absolute -right-4 -bottom-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow"
              style={{
                animationDelay: '0.5s',
                transform: `translate(${offset * 0.5}px, ${offset * 0.5}px)`
              }}
            ></div>
          </div>
          
          {/* Title with glass effect background */}
          <div 
            className="inline-block glass rounded-2xl px-8 py-4 mb-6 transform"
            style={{
              transform: `translateY(${offset * 0.2}px)`
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient bg-gradient-to-r from-primary-400 to-purple-500">
              {title}
            </h1>
          </div>
          
          {/* Description with animated underline */}
          <div 
            className="relative inline-block transform"
            style={{
              transform: `translateY(${offset * 0.1}px)`
            }}
          >
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              {description}
            </p>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-pulse-slow"></div>
          </div>
        </div>

        {/* Decorative corner elements with parallax */}
        <div 
          className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary-500/20 rounded-tl-3xl"
          style={{
            transform: `translate(${offset * 0.3}px, ${offset * 0.3}px)`
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-primary-500/20 rounded-tr-3xl"
          style={{
            transform: `translate(${offset * -0.3}px, ${offset * 0.3}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary-500/20 rounded-bl-3xl"
          style={{
            transform: `translate(${offset * 0.3}px, ${offset * -0.3}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary-500/20 rounded-br-3xl"
          style={{
            transform: `translate(${offset * -0.3}px, ${offset * -0.3}px)`
          }}
        ></div>
      </div>
    </div>
  );
}
