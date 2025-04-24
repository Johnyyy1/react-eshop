import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import NewRelease2Better from '../../Assets/img/NewRelease2Better.png';
import GymEquipment from '../../Assets/img/GymEquipment.png';
import Accessories from '../../Assets/img/Accessories.png';

const categories = [
  {
    title: "Protein Supplements",
    description: "Whey, plant-based, and specialty protein powders to support your goals.",
    image: NewRelease2Better,
    link: "/protein",
    icon: "⚡"
  },
  {
    title: "Gym Equipment",
    description: "Professional-grade weights, machines, and accessories for home or gym use.",
    image: GymEquipment,
    link: "/equipment",
    icon: "🏋️"
  },
  {
    title: "Fitness Accessories",
    description: "Essential workout gear, supplements, and accessories to enhance your training.",
    image: Accessories,
    link: "/accessories",
    icon: "⚙️"
  }
];

export default function FeaturedCategories() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Ambient light effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-2/3 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          {/* Accent line with floating dots */}
          <div className="inline-flex relative">
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mb-4"></div>
            <div className="absolute -left-2 -top-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse-slow"></div>
            <div className="absolute -right-2 -bottom-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Categories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated selection of premium fitness products designed to help you achieve your performance goals.
          </p>
        </div>
        
        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="h-full glass rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10">
                {/* Image container */}
                <div className="h-48 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent z-10"></div>
                  
                  {/* Image */}
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredCategory === index ? 'scale-110 filter brightness-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Category icon */}
                  <div className="absolute top-4 left-4 glass rounded-xl w-10 h-10 flex items-center justify-center text-2xl z-20 animate-float">
                    {category.icon}
                  </div>
                  
                  {/* Category title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-6 h-20">{category.description}</p>
                  
                  <a 
                    href={category.link} 
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group"
                  >
                    <span className="font-medium mr-2">Browse Products</span>
                    <ArrowRight 
                      size={16} 
                      className="transform transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
                
                {/* Bottom accent line */}
                <div className={`h-1 bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-300 ${
                  hoveredCategory === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>
              
              {/* Floating plus icon */}
              <div className={`absolute -right-2 -bottom-2 w-8 h-8 rounded-full glass-hover flex items-center justify-center text-primary-400 transform transition-all duration-300 ${
                hoveredCategory === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <Plus size={14} />
              </div>
            </div>
          ))}
        </div>
        
        {/* View all link */}
        <div className="mt-16 text-center">
          <a 
            href="/categories" 
            className="inline-flex items-center px-6 py-3 rounded-full glass-hover group border border-white/10 text-gray-300 hover:text-white transition-all duration-300"
          >
            View All Categories
            <ArrowRight 
              size={16} 
              className="ml-2 transform transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary-500/10 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-500/10 rounded-br-3xl"></div>
    </div>
  );
}