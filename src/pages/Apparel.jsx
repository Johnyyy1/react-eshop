export default function Apparel() {
  return (
    <div className="pt-24 pb-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Fitness Apparel</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-performance workout clothing designed for comfort and style
          </p>
        </div>
        
        <div className="mt-12">
          {/* Coming Soon Message */}
          <div className="text-center py-16 bg-gray-900/50 rounded-lg border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400">Our apparel collection is currently under development.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
