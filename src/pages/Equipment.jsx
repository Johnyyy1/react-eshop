import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import PageHeader from '../components/ui/PageHeader';
import { Dumbbell, Target, Gauge } from 'lucide-react';

export default function Equipment() {
  const equipmentProducts = products.filter(product => 
    product.category === 'equipment' || product.name.toLowerCase().includes('dumbbell')
  );

  return (
    <div className="bg-gray-950 min-h-screen">
      <PageHeader 
        title="Pro-Grade Equipment" 
        description="Professional gym equipment for your ultimate workout space"
      />

      {/* Features section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Dumbbell className="h-8 w-8" />,
              title: "Premium Quality",
              description: "Commercial-grade materials built to last"
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "Precision Engineering",
              description: "Designed for optimal performance"
            },
            {
              icon: <Gauge className="h-8 w-8" />,
              title: "Safety First",
              description: "Rigorously tested for your protection"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <div className="text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {equipmentProducts.map((product, index) => (
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
