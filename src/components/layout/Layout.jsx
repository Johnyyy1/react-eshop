import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Navbar />
      <main className="w-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}