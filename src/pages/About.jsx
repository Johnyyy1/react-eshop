import { Shield, Award, Users, Star, Target, Zap } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';

export default function About() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <PageHeader 
        title="Our Story" 
        description="Building the future of fitness since 2020"
      />

      {/* Vision section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              At JustLift, we believe that everyone deserves access to premium fitness equipment
              and supplements. Our mission is to provide the highest quality products that help
              you achieve your fitness goals.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Products', value: '100+' },
                { label: 'Customers', value: '25K+' },
                { label: 'Countries', value: '30+' },
                { label: 'Team Members', value: '50+' }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Shield />, title: "Quality" },
              { icon: <Star />, title: "Premium" },
              { icon: <Target />, title: "Focus" },
              { icon: <Zap />, title: "Energy" }
            ].map((item, index) => (
              <div key={index} className="aspect-square bg-gray-900/50 rounded-lg border border-white/5 p-6 flex flex-col items-center justify-center text-blue-500">
                {item.icon}
                <span className="mt-2 text-white">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-500" />,
                title: "Premium Quality",
                description: "All our products undergo rigorous quality testing"
              },
              {
                icon: <Award className="h-8 w-8 text-blue-500" />,
                title: "Expert Approved",
                description: "Developed with fitness professionals"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-500" />,
                title: "Community Driven",
                description: "Built by and for the fitness community"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/5">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
