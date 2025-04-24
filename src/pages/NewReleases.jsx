import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import PageHeader from '../components/ui/PageHeader';

export default function NewReleases() {
  // For now, showing all products as new releases
  // In a real app, you would filter based on release date or a "new" flag
  const newProducts = products;

  return (
    <div className="bg-gray-950 min-h-screen">
      <PageHeader 
        title="New Releases" 
        description="Be the first to try our latest products and innovations"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newProducts.map((product, index) => (
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