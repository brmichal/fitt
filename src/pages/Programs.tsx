import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Programs = () => {
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
            <h1 className="text-4xl font-bold text-white mb-8">Our Programs</h1>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60" 
                  alt="Assessment" 
                  className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Client Assessment</h2>
                  <p className="text-gray-200">
                    Our journey begins with a comprehensive assessment of your current fitness level, goals, and lifestyle. We take into account your medical history, previous exercise experience, and any limitations to create a program that's perfectly tailored to you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=800&auto=format&fit=crop&q=60" 
                  alt="Goal Setting" 
                  className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Goal Setting</h2>
                  <p className="text-gray-200">
                    Together, we'll establish clear, achievable goals that align with your aspirations. Whether it's weight loss, muscle gain, improved endurance, or overall wellness, we'll create a roadmap to success with measurable milestones along the way.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&auto=format&fit=crop&q=60" 
                  alt="Importance of Fitness" 
                  className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">The Importance of Being in Shape</h2>
                  <p className="text-gray-200">
                    Being in shape isn't just about looking good – it's about feeling great and living life to the fullest. Regular exercise and proper nutrition improve cardiovascular health, boost energy levels, enhance mental clarity, and increase longevity. Our programs are designed to help you achieve and maintain optimal fitness for a better quality of life.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Programs;