import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import ProductCard from '../components/ui/ProductCard';
import PageHeader from '../components/ui/PageHeader';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="bg-dark-950 min-h-screen">
        <PageHeader 
          title="Your Favorites" 
          description="Your wishlist is currently empty"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass card-hover rounded-xl p-12 text-center">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto mb-6 animate-float">
              <Heart size={24} className="text-primary-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">No Favorites Yet</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Start adding your favorite products to create your perfect wishlist.
              Discover our amazing collection!
            </p>
            <button 
              onClick={() => navigate('/categories')}
              className="btn-modern group px-6 py-3 rounded-full inline-flex items-center justify-center"
            >
              Browse Products
              <ArrowRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-950 min-h-screen">
      <PageHeader 
        title="Your Favorites" 
        description="Your carefully selected favorite products"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favorites.map((product, index) => (
            <div
              key={product.id}
              className={`transform transition-all duration-500 hover:-translate-y-2 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`flex justify-center mt-12 transition-all duration-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: `${favorites.length * 100}ms` }}>
          <div className="glass rounded-full p-2 inline-flex gap-2">
            <button 
              onClick={() => navigate('/categories')}
              className="btn-modern px-6 py-2 rounded-full inline-flex items-center text-sm"
            >
              <ShoppingBag size={16} className="mr-2" />
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
