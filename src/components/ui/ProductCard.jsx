import { Star, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.sale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex text-yellow-400 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#FBBF24" />
          ))}
          <span className="text-gray-600 text-sm ml-2">({product.reviewCount})</span>
        </div>
        <h3 className="font-bold mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            {product.oldPrice && (
              <span className="text-gray-400 line-through text-sm mr-2">${product.oldPrice}</span>
            )}
            <span className="text-blue-700 font-bold">${product.price}</span>
          </div>
          <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}