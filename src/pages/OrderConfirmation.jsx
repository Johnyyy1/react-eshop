import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Mail, ArrowRight, Truck, Calendar, Clock } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { useCart } from '../context/CartContext';

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const { cart, cartTotal } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);
  const orderNumber = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-950 min-h-screen">
      <PageHeader 
        title="Order Confirmed!" 
        description="Thank you for shopping with us"
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className={`glass card-hover rounded-xl p-8 text-center transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="relative">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center mx-auto mb-6 relative">
              <CheckCircle size={32} className="text-green-500 animate-check" />
              <div className="absolute inset-0 rounded-full border-4 border-green-500 scale-0 animate-circle"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Order Successfully Placed!</h2>
          <p className="text-gray-400 mb-6">
            Your order has been confirmed and will be shipped soon.
            <br />Order number: <span className="text-primary-400">{orderNumber}</span>
          </p>
          
          {/* Order Timeline */}
          <div className="flex justify-between max-w-xs mx-auto mb-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-green-500">
                <CheckCircle size={16} />
              </div>
              <div className="text-xs text-gray-400 mt-2">Order Placed</div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="h-0.5 w-full bg-gradient-to-r from-green-500 to-primary-500"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-primary-400">
                <Package size={16} />
              </div>
              <div className="text-xs text-gray-400 mt-2">Processing</div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="h-0.5 w-full bg-gradient-to-r from-primary-500 to-blue-500"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-blue-400">
                <Truck size={16} />
              </div>
              <div className="text-xs text-gray-400 mt-2">Shipping</div>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className={`glass rounded-xl p-6 mt-8 transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          <h3 className="text-xl font-bold text-white mb-4">Order Details</h3>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 group">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium group-hover:text-primary-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-400">Quantity: {item.quantity}</p>
                </div>
                <p className="text-white font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t border-white/5 pt-4 mt-4">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 mt-2">
                <span>Shipping</span>
                <span className="text-primary-400">Free</span>
              </div>
              <div className="flex justify-between text-white font-bold mt-2">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="glass rounded-xl p-6">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400 mb-4">
              <Truck size={20} />
            </div>
            <h4 className="text-white font-bold mb-2">Estimated Delivery</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>{estimatedDelivery}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock size={16} className="mr-2" />
                <span>Standard Shipping (5-7 business days)</span>
              </div>
            </div>
          </div>
          <div className="glass rounded-xl p-6">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400 mb-4">
              <Mail size={20} />
            </div>
            <h4 className="text-white font-bold mb-2">Order Updates</h4>
            <p className="text-gray-400 text-sm">
              We'll send you shipping confirmation and tracking details to your email address.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className={`flex flex-col sm:flex-row justify-center gap-4 mt-8 transition-all duration-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <button 
            onClick={() => navigate('/')}
            className="btn-modern group px-6 py-3 rounded-full inline-flex items-center justify-center"
          >
            Continue Shopping
            <ArrowRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}