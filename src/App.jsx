import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Protein from './pages/Protein';
import Equipment from './pages/Equipment';
import Apparel from './pages/Apparel';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Favorites from './pages/Favorites';
import Categories from './pages/Categories';
import PreWorkout from './pages/PreWorkout';
import Creatine from './pages/Creatine';
import NewReleases from './pages/NewReleases';
import './App.css';

export default function App() {
  const basename = import.meta.env.PROD ? '/react-eshop' : '/';
  
  return (
    <Router basename={basename}>
      <CartProvider>
        <FavoritesProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/protein" element={<Protein />} />
              <Route path="/supplements/pre-workout" element={<PreWorkout />} />
              <Route path="/supplements/creatine" element={<Creatine />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/apparel" element={<Apparel />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/new-releases" element={<NewReleases />} />
            </Routes>
          </Layout>
        </FavoritesProvider>
      </CartProvider>
    </Router>
  );
}
