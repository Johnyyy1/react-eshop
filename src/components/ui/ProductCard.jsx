import { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';


function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-gray-900 rounded-xl overflow-hidden border border-white/5 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image */}
      <div className="relative h-64 overflow-hidden bg-gray-800">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
        
        {/* Badge (if applicable) */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </div>
        )}
        
        {/* Sale badge */}
        {product.sale && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            SALE
          </div>
        )}
        
        {/* Quick actions - appear on hover */}
        <div className={`absolute bottom-4 left-0 right-0 flex justify-center space-x-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Heart size={18} />
          </button>
          <button className="h-10 px-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-medium">
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Product details */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                className={i < Math.floor(product.rating) ? "" : "text-gray-600"}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">{product.rating}</span>
        </div>
        
        {/* Product name */}
        <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
        
        {/* Product description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {/* Price */}
        <div className="flex items-center">
          {product.sale && (
            <span className="text-gray-400 line-through text-sm mr-2">${product.oldPrice}</span>
          )}
          <span className="text-lg font-bold text-white">${product.price}</span>
        </div>
      </div>
      
      {/* Bottom accent line - animated on hover */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ${
        isHovered ? 'w-full' : 'w-0'
      }`}></div>
    </div>
  );
}

export default ProductCard;