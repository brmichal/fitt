import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-95"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center lg:text-left animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Transform Your Life Through Fitness
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-6 md:mb-8">
            Expert-led training programs and personalized nutrition plans to help you achieve your fitness goals.
          </p>
          <button className="bg-accent hover:bg-accent-hover text-white px-6 md:px-8 py-2 md:py-3 rounded-lg flex items-center space-x-2 transition-colors mx-auto lg:mx-0">
            <span>Get Started</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;