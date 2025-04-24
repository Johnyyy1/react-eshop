import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import PageHeader from '../components/ui/PageHeader';

export default function Creatine() {
  const creatineProducts = products.filter(product => 
    product.name.toLowerCase().includes('creatine')
  );

  return (
    <div className="bg-gray-950 min-h-screen">
      <PageHeader 
        title="Creatine" 
        description="Build strength and enhance recovery with our pure creatine supplements"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {creatineProducts.map((product, index) => (
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