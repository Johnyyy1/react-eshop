import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="h-full glass rounded-xl p-6 relative group overflow-hidden">
      {/* Floating quote icon */}
      <div className="absolute -right-2 -top-2 w-12 h-12 rounded-full glass-hover flex items-center justify-center text-primary-400 transform rotate-12 group-hover:rotate-0 transition-all duration-300">
        <Quote size={20} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <blockquote className="text-gray-300 mb-6">
          "{testimonial.quote}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center">
          <div className="mr-4">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-400">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <div className="font-medium text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-400">Verified Customer</div>
          </div>
        </div>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated border */}
      <div className="animated-border"></div>
    </div>
  );
}