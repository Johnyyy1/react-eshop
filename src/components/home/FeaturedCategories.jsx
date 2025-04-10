import { ArrowRight } from 'lucide-react';

export default function FeaturedCategories() {
  const categories = [
    {
      title: "Protein Supplements",
      description: "Whey, plant-based, and specialty protein powders to support your goals.",
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      title: "Gym Equipment",
      description: "Professional-grade weights, machines, and accessories for home or gym use.",
      image: "/api/placeholder/400/300",
      link: "#"
    },
    {
      title: "Fitness Accessories",
      description: "Essential workout gear, supplements, and accessories to enhance your training.",
      image: "/api/placeholder/400/300",
      link: "#"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a href={category.link} className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                  Browse Products
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}