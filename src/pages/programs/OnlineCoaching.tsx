import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const OnlineCoaching = () => {
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
            <h1 className="text-4xl font-bold text-white mb-8">Online Coaching</h1>
            
            <div className="space-y-12">
              {/* First section - Image left, text right */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="/lovable-uploads/ac43ad13-1ae4-4bfa-b8bb-da0f077fc23e.png"
                  alt="Online Coaching Stretching" 
                  className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-[400px]"
                />
                <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-gray-200">
                    In today's fast-paced world, finding time for fitness can be challenging. That's why GetFitt.app's online coaching program is designed to bring expert guidance and personalized training directly to you, wherever you are. Our comprehensive online coaching service combines the expertise of professional trainers with the convenience of digital delivery, making it easier than ever to achieve your fitness goals.
                  </p>
                  <p className="text-gray-200">
                    Online coaching has revolutionized the fitness industry by making professional guidance accessible to everyone, regardless of location or schedule. Through our platform, you'll receive personalized workout plans, nutrition guidance, and ongoing support, all delivered through our user-friendly app and regular video consultations with your dedicated coach.
                  </p>
                </div>
              </div>

              {/* Second section - Text left, image right */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <img 
                  src="/lovable-uploads/b107fd0f-d302-4fb9-8aae-a4764ed19373.png"
                  alt="Online Coaching Exercise" 
                  className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-[400px]"
                />
                <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-gray-200">
                    What sets our online coaching apart is the level of personalization and attention you receive. Your coach will conduct a thorough initial assessment of your goals, lifestyle, and current fitness level to create a program that fits seamlessly into your daily routine. We understand that everyone's journey is unique, and our coaches are trained to adapt your program based on your progress and feedback.
                  </p>
                  <p className="text-gray-200">
                    Technology plays a crucial role in our online coaching program. Through our app, you'll have access to exercise demonstration videos, progress tracking tools, and direct messaging with your coach. We utilize advanced analytics to monitor your progress and make data-driven adjustments to your program, ensuring optimal results.
                  </p>
                </div>
              </div>

              {/* Third section - Image left, text right */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="/lovable-uploads/0e932a37-2c84-43fe-8e78-666cff1df3dc.png"
                  alt="Online Coaching Workout" 
                  className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-[400px]"
                />
                <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-gray-200">
                    The flexibility of online coaching is particularly valuable in today's dynamic lifestyle. Whether you're traveling for work, have a busy family schedule, or prefer working out from home, your program travels with you. Our coaches provide modifications for different environments and equipment availability, ensuring you can maintain consistency regardless of circumstances.
                  </p>
                  <p className="text-gray-200">
                    Accountability is a key component of our online coaching program. Regular check-ins, progress photos, and performance metrics help keep you on track, while your coach provides the motivation and support needed to overcome challenges. We've found that this combination of accountability and support leads to higher success rates compared to self-directed fitness programs.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-200">
                  Our online coaching program also includes access to our community of like-minded individuals. Through our private online groups, you can share experiences, celebrate victories, and find additional support from others on similar journeys. This sense of community, combined with expert guidance, creates a powerful environment for achieving lasting results.
                </p>
                <p className="text-gray-200">
                  The investment in online coaching is not just about achieving short-term fitness goals; it's about developing the knowledge and habits needed for long-term success. Our coaches focus on education, helping you understand the 'why' behind your training and nutrition plans, empowering you to make informed decisions about your health and fitness journey.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OnlineCoaching;