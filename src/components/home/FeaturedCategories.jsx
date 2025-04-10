import { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';

export default function FeaturedCategories() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  const categories = [
    {
      title: "Protein Supplements",
      description: "Whey, plant-based, and specialty protein powders to support your goals.",
      image: "/api/placeholder/600/400",
      link: "#",
      icon: "⚡"
    },
    {
      title: "Gym Equipment",
      description: "Professional-grade weights, machines, and accessories for home or gym use.",
      image: "/api/placeholder/600/400",
      link: "#",
      icon: "🏋️"
    },
    {
      title: "Fitness Accessories",
      description: "Essential workout gear, supplements, and accessories to enhance your training.",
      image: "/api/placeholder/600/400",
      link: "#",
      icon: "⚙️"
    }
  ];

  return (
    <div className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Categories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our curated selection of premium fitness products designed to help you achieve your performance goals.</p>
        </div>
        
        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Card */}
              <div className="h-full bg-gray-900 rounded-xl overflow-hidden border border-white/5 transition-all duration-300 transform hover:translate-y-[-8px] hover:shadow-xl hover:shadow-blue-500/10">
                {/* Image container */}
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  {/* Image with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-70"></div>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCategory === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Category icon */}
                  <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-2xl w-10 h-10 rounded-full flex items-center justify-center border border-white/10 z-20">
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
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="mr-2 font-medium">Browse Products</span>
                    <span className={`transition-transform duration-300 ${
                      hoveredCategory === index ? 'translate-x-1' : 'translate-x-0'
                    }`}>
                      <ArrowRight size={16} />
                    </span>
                  </a>
                </div>
                
                {/* Hover decoration */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  hoveredCategory === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>
              
              {/* Decorative plus icon */}
              <div className={`absolute -right-2 -bottom-2 w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white transform transition-all duration-300 ${
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
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all duration-300 group"
          >
            View All Categories
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}