import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import PageHeader from '../components/ui/PageHeader';

export default function Protein() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const proteinProducts = products.filter(product => 
    product.category === 'protein' || product.name.toLowerCase().includes('protein')
  );

  const categories = ['All', 'Whey', 'Plant-Based', 'Mass Gainers'];

  return (
    <div className="bg-gray-950 min-h-screen">
      <PageHeader 
        title="Premium Protein" 
        description="Fuel your gains with our premium selection of protein supplements"
      />

      {/* Category filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.toLowerCase()
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {proteinProducts.map((product, index) => (
            <div
              key={product.id}
              className="transform transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
