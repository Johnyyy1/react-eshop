import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Add page transition class
    const main = document.querySelector('main');
    main.style.opacity = '0';
    main.style.transform = 'translateY(20px)';
    
    requestAnimationFrame(() => {
      main.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dark-950 w-full relative">
      {/* Fixed background pattern */}
      <div className="fixed inset-0 bg-pattern opacity-5 pointer-events-none"></div>
      
      {/* Fixed ambient lights */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" 
           style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
           style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen will-change-transform">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}