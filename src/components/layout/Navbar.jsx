import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">PowerFuel</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-10 space-x-8">
              <a href="#" className="text-white hover:text-gray-300 px-3 py-2 font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 font-medium">Protein</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 font-medium">Equipment</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 font-medium">Apparel</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 font-medium">About</a>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="hidden md:flex items-center text-gray-300 hover:text-white">
              <ShoppingCart size={20} />
              <span className="ml-2">Cart (0)</span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-white font-medium">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white font-medium">Protein</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white font-medium">Equipment</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white font-medium">Apparel</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white font-medium">About</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white font-medium flex items-center">
              <ShoppingCart size={20} />
              <span className="ml-2">Cart (0)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}