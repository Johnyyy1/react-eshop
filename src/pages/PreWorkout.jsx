import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import PageHeader from '../components/ui/PageHeader';

export default function PreWorkout() {
  const preWorkoutProducts = products.filter(product => 
    product.name.toLowerCase().includes('pre-workout')
  );

  return (
    <div className="bg-gray-950 min-h-screen">
      <PageHeader 
        title="Pre-Workout" 
        description="Maximize your workout intensity with our premium pre-workout formulas"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {preWorkoutProducts.map((product, index) => (
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