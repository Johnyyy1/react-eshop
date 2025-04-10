import { ChevronRight } from 'lucide-react';


export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white"> 
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Fuel Your Fitness Journey</h1>
            <p className="text-lg md:text-xl mb-6">Premium protein supplements and top-quality gym equipment to help you reach your fitness goals.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className=" text-blue-900 px-6 py-3 btn-grad-blue rounded-lg font-bold flex items-center justify-center">
                Shop Protein
                <ChevronRight size={20} className="ml-2" />
              </button>
              <button className="bg-transparent border-2 btn-grad-black border-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 flex items-center justify-center">
                Equipment
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="/api/placeholder/400/400" 
                alt="Protein powder product"
                className="absolute inset-0 object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}