import { useState, useEffect } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

function ProductCard({ product, loading }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  useEffect(() => {
    if (!loading && product?.image) {
      const img = new Image();
      img.src = product.image;
      img.onload = () => setIsImageLoaded(true);
    }
  }, [product?.image, loading]);

  if (loading) {
    return (
      <div className="glass card-hover relative overflow-hidden rounded-xl">
        <div className="h-64 skeleton"></div>
        <div className="p-5 space-y-4">
          <div className="h-4 w-24 skeleton rounded"></div>
          <div className="h-6 w-3/4 skeleton rounded"></div>
          <div className="h-4 w-full skeleton rounded"></div>
          <div className="h-8 w-1/3 skeleton rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="glass card-hover relative overflow-hidden rounded-xl transform-gpu transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.02) translateY(-8px)' : 'scale(1) translateY(0)',
      }}
    >
      {/* Product image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-all duration-700 ${
            !isImageLoaded ? 'skeleton blur-sm' : ''
          } ${isHovered ? 'scale-110 filter brightness-110' : 'scale-100'}`}
          style={{
            opacity: isImageLoaded ? 1 : 0,
            transform: `scale(${isHovered ? 1.1 : 1}) rotate(${isHovered ? '1deg' : '0deg'})`,
          }}
        />
        
        {/* Overlay with animated gradient */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isHovered ? 'opacity-60' : 'opacity-40'
        }`} style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
        }}></div>
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 glass text-white text-xs font-medium px-3 py-1 rounded-full animate-pulse-slow">
            {product.badge}
          </div>
        )}
        
        {/* Sale badge */}
        {product.sale && (
          <div className={`absolute top-4 right-4 bg-gradient-radial from-red-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}>
            SALE
          </div>
        )}
        
        {/* Quick actions */}
        <div className={`absolute bottom-4 left-0 right-0 flex justify-center space-x-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            onClick={() => toggleFavorite(product)}
            className={`w-10 h-10 rounded-full glass-hover flex items-center justify-center transition-all duration-300 ${
              favorite ? 'bg-red-500 text-white scale-110' : 'text-white scale-100'
            } hover:scale-110 active:scale-95`}
          >
            <Heart 
              size={18} 
              fill={favorite ? 'currentColor' : 'none'} 
              className={favorite ? 'animate-heartbeat' : ''}
            />
          </button>
          <button 
            onClick={() => addToCart(product)}
            className="btn-modern h-10 px-4 rounded-full text-white flex items-center justify-center text-sm font-medium transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Product details */}
      <div className="p-5 space-y-4">
        {/* Rating */}
        <div className="flex items-center">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                className={`transform transition-all duration-300 ${
                  isHovered && i < Math.floor(product.rating) ? 'scale-110' : 'scale-100'
                } ${i < Math.floor(product.rating) ? "" : "text-gray-600"}`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">{product.rating}</span>
        </div>
        
        {/* Product name */}
        <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary-400">
          {product.name}
        </h3>
        
        {/* Product description */}
        <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
        
        {/* Price */}
        <div className="flex items-center pt-2">
          {product.sale && (
            <span className="text-gray-400 line-through text-sm mr-2">${product.oldPrice}</span>
          )}
          <span className="text-xl font-bold text-gradient">${product.price}</span>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-300 ${
        isHovered ? 'w-full' : 'w-0'
      }`}></div>
    </div>
  );
}

export default ProductCard;