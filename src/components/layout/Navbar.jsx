import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Protein', 'Equipment', 'Apparel', 'About'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/10 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Highlight line with animated gradient */}
      <div className="h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo area */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Zap className="text-blue-500" size={22} />
              <span className="font-bold text-xl tracking-wide text-white">
                JUST<span className="font-light">LIFT</span>
              </span>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className="relative px-4 py-2 rounded-full group border-none"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeItem === item ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {item}
                </span>
                
                {/* Animated background indicator */}
                <span 
                  className={`absolute inset-0 rounded-full transition-all duration-300 transform ${
                    activeItem === item 
                      ? 'bg-blue-500/20 scale-100 opacity-100' 
                      : 'bg-transparent scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-50 group-hover:bg-white/5'
                  }`}
                ></span>
                
                {/* Bottom indicator line */}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-500 transition-all duration-300 ${
                    activeItem === item ? 'w-8' : 'w-0 group-hover:w-4'
                  }`}
                ></span>
              </button>
            ))}
          </div>
          
          {/* Cart button */}
          <div className="flex items-center">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group">
              <ShoppingCart size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">Cart (0)</span>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-white" />
              ) : (
                <Menu size={20} className="text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with clean animation */}
      <div 
        className={`md:hidden fixed inset-x-0 transition-all duration-500 ease-in-out bg-gradient-to-b from-black to-gray-900/95 backdrop-blur-md ${
          mobileMenuOpen 
            ? 'top-16 opacity-100' 
            : '-top-full opacity-0'
        }`}
      >
        <div className="p-6 space-y-3">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => {
                setActiveItem(item);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-3 rounded-lg transition-all duration-300 ${
                activeItem === item 
                  ? 'text-white bg-blue-500/20 border-l-2 border-blue-500' 
                  : 'text-gray-400 hover:bg-white/5 border-l-2 border-transparent'
              }`}
              style={{ 
                transitionDelay: `${i * 50}ms`,
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              {item}
            </button>
          ))}
          
          <div className="pt-4 mt-2">
            <button className="flex w-full items-center space-x-2 px-4 py-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300">
              <ShoppingCart size={18} className="text-blue-400" />
              <span className="text-gray-300">Cart (0)</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}