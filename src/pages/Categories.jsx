import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import NewRelease2Better from '../Assets/img/NewRelease2Better.png';
import GymEquipment from '../Assets/img/GymEquipment.png';
import Accessories from '../Assets/img/Accessories.png';
import PreWorkout from '../Assets/img/PreWorkout.png';
import Creatine from '../Assets/img/Creatine.png';
import ProteinGeneral from '../Assets/img/ProteinGeneral.png';

export default function Categories() {
  const categories = [
    {
      title: "Protein",
      description: "Premium whey, plant-based, and specialty protein powders",
      image: ProteinGeneral,
      path: "/protein",
      highlight: "Most Popular"
    },
    {
      title: "Pre-Workout",
      description: "Energy-boosting formulas for maximum performance",
      image: PreWorkout,
      path: "/supplements/pre-workout",
      highlight: "Best Seller"
    },
    {
      title: "Creatine",
      description: "Pure creatine monohydrate for strength and recovery",
      image: Creatine,
      path: "/supplements/creatine"
    },
    {
      title: "Equipment",
      description: "Professional-grade weights and training equipment",
      image: GymEquipment,
      path: "/equipment",
      highlight: "Premium Quality"
    },
    {
      title: "Apparel",
      description: "Performance workout clothing and accessories",
      image: Accessories,
      path: "/apparel",
      highlight: "Coming Soon"
    },
    {
      title: "New Releases",
      description: "Check out our latest product launches",
      image: NewRelease2Better,
      path: "/new-releases",
      highlight: "New"
    }
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <PageHeader 
        title="Product Categories" 
        description="Explore our complete collection of premium fitness products"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Highlight badge */}
                {category.highlight && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                      {category.highlight}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="font-medium">Browse Products</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 w-0 group-hover:w-full"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}