import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const PersonalTraining = () => {
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
            <h1 className="text-4xl font-bold text-white mb-8">Personal Training</h1>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Personal Training Session" 
                  className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
                <div className="space-y-4">
                  <p className="text-gray-200">
                    At GetFitt.app, we believe that personal training is the most effective way to achieve your fitness goals. Our certified personal trainers work one-on-one with you to create a customized workout plan that fits your unique needs and lifestyle. Whether you're just starting your fitness journey or looking to take your training to the next level, our experienced trainers will guide you every step of the way.
                  </p>
                  <p className="text-gray-200">
                    Each personal training session is carefully designed to maximize your results while ensuring proper form and technique. We focus on progressive overload, proper nutrition guidance, and regular assessments to track your progress. Our trainers are not just experts in exercise science; they're also skilled motivators who will push you to achieve more than you thought possible.
                  </p>
                  <p className="text-gray-200">
                    What sets our personal training apart is our holistic approach. We don't just focus on the physical aspects of fitness; we address lifestyle factors, stress management, and recovery techniques. Our trainers will help you develop sustainable habits that lead to long-term success. We use the latest research and technology to optimize your workouts and ensure you're getting the most out of every session.
                  </p>
                  <p className="text-gray-200">
                    Whether your goal is weight loss, muscle gain, improved athletic performance, or better overall health, our personal training program will help you get there. We offer flexible scheduling options to accommodate your busy lifestyle, and our trainers are available for both in-person and virtual sessions. With our personal training program, you'll have the support and expertise you need to transform your body and your life.
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

export default PersonalTraining;