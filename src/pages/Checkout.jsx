import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import PageHeader from '../components/ui/PageHeader';
import { CreditCard, Truck, ShieldCheck, User, MapPin, Loader } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    clearCart();
    navigate('/order-confirmation');
  };

  const inputClasses = "mt-1 block w-full rounded-lg glass text-white px-4 py-2.5 border border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 placeholder-gray-500 bg-white/5";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1";

  return (
    <div className="bg-dark-950 min-h-screen">
      <PageHeader 
        title="Secure Checkout" 
        description="Complete your purchase with our secure payment system"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form Fields */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className={`glass rounded-xl p-6 space-y-4 transition-all duration-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Contact Information</h3>
              </div>
              
              <div>
                <label htmlFor="email" className={labelClasses}>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            {/* Shipping Information */}
            <div className={`glass rounded-xl p-6 space-y-4 transition-all duration-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '150ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Shipping Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClasses}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className={labelClasses}>Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className={labelClasses}>City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className={labelClasses}>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="country" className={labelClasses}>Country</label>
                  <select
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className={`glass rounded-xl p-6 space-y-4 transition-all duration-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400">
                  <CreditCard size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Payment Information</h3>
              </div>
              
              <div>
                <label htmlFor="cardNumber" className={labelClasses}>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  className={inputClasses}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className={labelClasses}>Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    id="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className={labelClasses}>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className={`space-y-6 transition-all duration-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '450ms' }}>
            <div className="glass rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <p className="text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-white font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-white/5 pt-4 space-y-3">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-primary-400">Free</span>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <div className="flex justify-between text-white font-bold">
                    <span>Total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="btn-modern group w-full py-3 rounded-full mt-6 relative overflow-hidden disabled:opacity-50"
              >
                <span className={`flex items-center justify-center transition-all duration-200 ${
                  isProcessing ? 'opacity-0' : 'opacity-100'
                }`}>
                  Complete Order
                </span>
                {isProcessing && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader className="animate-spin" size={24} />
                  </div>
                )}
              </button>

              {/* Security Features */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { icon: <ShieldCheck size={16} />, text: "Secure" },
                  { icon: <Truck size={16} />, text: "Fast Shipping" },
                  { icon: <CreditCard size={16} />, text: "Easy Payment" }
                ].map((feature, index) => (
                  <div key={index} className="glass rounded-xl p-3 text-center">
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center mx-auto mb-2 text-primary-400">
                      {feature.icon}
                    </div>
                    <span className="text-xs text-gray-400">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}