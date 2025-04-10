import Layout from './components/layout/Layout'
import Hero from './components/home/Hero';
import FeaturedCategories from './components/home/FeaturedCategories';
import BestSellers from './components/home/BestSellers';
import Testimonials from './components/home/Testimonials';
import CallToAction from './components/home/CallToAction';
import './App.css';


export default function App() {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}
