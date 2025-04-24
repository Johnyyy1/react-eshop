import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (cart.length === 0) {
    return (
      <div className="bg-dark-950 min-h-screen">
        <PageHeader 
          title="Your Cart" 
          description="Your cart is currently empty"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass card-hover rounded-xl p-12 text-center">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto mb-6 animate-float">
              <ShoppingBag size={24} className="text-primary-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Your Cart is Empty</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. 
              Start shopping to find amazing fitness products!
            </p>
            <button 
              onClick={() => navigate('/')}
              className="btn-modern group px-6 py-3 rounded-full text-white font-medium inline-flex items-center"
            >
              Continue Shopping
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
        title="Your Cart" 
        description="Review and manage your selected items"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div 
                key={item.id}
                className={`glass card-hover rounded-xl p-4 flex items-center gap-4 transition-all duration-500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                
                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-white font-bold group-hover:text-primary-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="glass rounded-full inline-flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-primary-400 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-primary-400 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-white font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 rounded-full glass-hover text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className={`transition-all duration-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: `${cart.length * 100}ms` }}>
            <div className="glass rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
              
              {/* Summary Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-primary-400">Free</span>
                </div>
                <div className="border-t border-white/5 pt-3 mt-3">
                  <div className="flex justify-between text-white font-bold">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <button 
                onClick={() => navigate('/checkout')}
                className="btn-modern group w-full py-3 rounded-full mb-6"
              >
                <span className="flex items-center justify-center">
                  Proceed to Checkout
                  <ArrowRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-xl p-3 text-center">
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center mx-auto mb-2 text-primary-400">
                    <Truck size={16} />
                  </div>
                  <span className="text-sm text-gray-400">Free Shipping</span>
                </div>
                <div className="glass rounded-xl p-3 text-center">
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center mx-auto mb-2 text-primary-400">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-sm text-gray-400">Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
