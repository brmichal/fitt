import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Trainers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary/10">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          Back
        </Button>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-white mb-8">Our Expert Trainers</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60" 
                  alt="Professional Trainer" 
                  className="w-full rounded-lg shadow-lg"
                />
                <h2 className="text-2xl font-semibold text-white">Global Expertise</h2>
                <p className="text-gray-200">
                  Our team consists of certified professionals from around the world, bringing diverse perspectives and methodologies to your fitness journey. Each trainer brings their unique expertise and cultural influence to create a truly comprehensive approach to fitness.
                </p>
              </div>

              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?w=800&auto=format&fit=crop&q=60" 
                  alt="Modern Training" 
                  className="w-full rounded-lg shadow-lg"
                />
                <h2 className="text-2xl font-semibold text-white">Modern Approach</h2>
                <p className="text-gray-200">
                  We continuously evolve our training methods, incorporating the latest research and technology. Our programs are dynamic, adapting to new scientific findings while maintaining proven traditional techniques for optimal results.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <h2 className="text-2xl font-semibold text-white">Continuous Development</h2>
              <p className="text-gray-200">
                Our trainers regularly participate in international conferences, workshops, and certification programs to stay at the forefront of fitness innovation. This commitment to continuous learning ensures that our clients receive the most effective and up-to-date training methods available.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Trainers;