import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-dark-950 relative overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Container for content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mb-4"></div>
            <h3 className="text-white text-xl font-bold mb-4">JustLift</h3>
            <p className="text-gray-400 mb-6">Premium fitness supplements and equipment for everyone from beginners to professional athletes.</p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-xl glass-hover flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  {social === 'facebook' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mb-4"></div>
            <h3 className="text-white text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-3">
              {['Protein Powders', 'Pre-Workout', 'Weight Equipment', 'Accessories', 'Special Offers'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 mr-2 transform transition-transform group-hover:scale-150"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About Links */}
          <div>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mb-4"></div>
            <h3 className="text-white text-xl font-bold mb-4">About</h3>
            <ul className="space-y-3">
              {['Our Story', 'Blog', 'Testimonials', 'Careers', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 mr-2 transform transition-transform group-hover:scale-150"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mb-4"></div>
            <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              {[
                { icon: <Phone size={16} />, text: '+1 (555) 123-4567' },
                { icon: <Mail size={16} />, text: 'support@justlift.com' },
                { icon: <MapPin size={16} />, text: '123 Fitness Street, Muscle City, MC 12345' }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-xl glass flex items-center justify-center text-primary-400 mr-3">
                    {item.icon}
                  </div>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">&copy; 2025 JustLift. All rights reserved.</p>
          <div className="mt-6 md:mt-0">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
              {['Privacy Policy', 'Terms of Service', 'Shipping Policy'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Trust badge */}
        <div className="mt-8 flex justify-center">
          <div className="glass px-6 py-3 rounded-full inline-flex items-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-500 mr-2">
              <path d="M20.995 6.9a.998.998 0 00-.548-.795 1 1 0 00-.883-.036C16.49 7.668 14.033 7.442 12 6.35c-2.033 1.093-4.49 1.318-7.564-.182a1 1 0 00-.883.036.998.998 0 00-.548.795 22.355 22.355 0 00.073 7.398A9.27 9.27 0 007.7 20.962a.997.997 0 001.078-.262L12 17.023l3.222 3.677a.997.997 0 001.078.262 9.271 9.271 0 004.622-6.564 22.354 22.354 0 00.073-7.399z" fill="currentColor" />
            </svg>
            <span className="text-gray-400 text-sm">Secure payments & 100% satisfaction guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}