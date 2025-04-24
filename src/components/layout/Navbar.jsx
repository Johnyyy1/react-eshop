import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartCount, isCartAnimating } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Protein', path: '/protein' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Apparel', path: '/apparel' },
    { name: 'About', path: '/about' },
    { name: 'Favorites', path: '/favorites' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass' : 'bg-transparent'
    }`}>
      {/* Animated accent line */}
      <div className="relative h-0.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient" 
             style={{ backgroundSize: '200% 100%' }}></div>
      </div>
      
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo area */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl glass-hover flex items-center justify-center">
              <Zap className="text-gradient" size={22} />
            </div>
            <span className="font-bold text-xl tracking-wide text-white">
              JUST<span className="font-light text-gradient">LIFT</span>
            </span>
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 rounded-full group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                
                {/* Animated background */}
                <span className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isActive(item.path)
                    ? 'glass opacity-100 scale-100'
                    : 'opacity-0 scale-90 group-hover:opacity-50 group-hover:scale-100'
                }`}></span>
                
                {/* Glow effect */}
                {isActive(item.path) && (
                  <span className="absolute inset-0 rounded-full glow-effect"></span>
                )}
              </Link>
            ))}
          </div>
          
          {/* Cart button */}
          <Link 
            to="/cart" 
            className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full glass-hover group relative ${
              isCartAnimating ? 'cart-pulse' : ''
            }`}
          >
            <ShoppingCart size={18} className="text-gradient" />
            <span className="text-gray-300 group-hover:text-white transition-colors">
              Cart ({cartCount})
            </span>
            {cartCount > 0 && (
              <span className={`absolute -top-1 -right-1 w-5 h-5 bg-gradient-radial from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-xs text-white ${
                isCartAnimating ? 'animate-ping' : 'animate-pulse'
              }`}>
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 glass-hover rounded-xl flex items-center justify-center"
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-gradient" />
            ) : (
              <Menu size={20} className="text-gradient" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-x-0 transition-all duration-500 ease-in-out glass backdrop-blur-md ${
          mobileMenuOpen 
            ? 'translate-y-0 opacity-100 shadow-xl shadow-black/10' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="p-6 space-y-3">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-500 ${
                isActive(item.path)
                  ? 'glass text-gradient font-medium translate-x-2' 
                  : 'text-gray-400 hover:text-white hover:glass-hover hover:translate-x-2'
              }`}
              style={{
                transitionDelay: `${i * 75}ms`,
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-2rem)',
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="pt-4 mt-2">
            <Link 
              to="/cart" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center space-x-2 px-4 py-3 rounded-lg glass-hover group"
              style={{
                transitionDelay: `${navItems.length * 75}ms`,
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-2rem)',
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              <ShoppingCart size={18} className="text-gradient group-hover:scale-110 transition-transform" />
              <span className="text-gray-300">Cart ({cartCount})</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background blur effect for mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </nav>
  );
}