import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#FBBF24" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
      <p className="font-bold">{testimonial.name}</p>
    </div>
  );
}