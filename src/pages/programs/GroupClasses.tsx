import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const GroupClasses = () => {
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
            <h1 className="text-4xl font-bold text-white mb-8">Group Classes</h1>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Group Fitness Class" 
                  className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
                <div className="space-y-4">
                  <p className="text-gray-200">
                    Join our vibrant community of fitness enthusiasts in our dynamic group classes at GetFitt.app. We believe that working out together creates an unmatched energy and motivation that pushes everyone to achieve their best. Our group classes are more than just workout sessions; they're opportunities to build lasting friendships and create a supportive network of like-minded individuals.
                  </p>
                  <p className="text-gray-200">
                    Research has shown that people who exercise in groups are more likely to stick to their fitness routines and achieve better results. The social aspect of group workouts creates accountability and provides emotional support during challenging moments. In our classes, you'll find yourself naturally pushing harder and achieving more, inspired by the energy of those around you.
                  </p>
                  <p className="text-gray-200">
                    We offer a diverse range of group classes to suit all fitness levels and interests. From high-intensity interval training (HIIT) to yoga, strength training to cardio dance, there's something for everyone. Our experienced instructors create an inclusive environment where beginners feel welcome and advanced participants are consistently challenged.
                  </p>
                  <p className="text-gray-200">
                    The community aspect of our group classes extends beyond the workout room. Members often organize social events, share nutrition tips, and support each other's fitness journeys. Many of our long-term members credit the friendships they've made in our classes as a key factor in their fitness success.
                  </p>
                  <p className="text-gray-200">
                    Each class is structured to promote both individual growth and group interaction. Our instructors are trained to foster a collaborative atmosphere while ensuring each participant receives personal attention and form corrections when needed. We regularly rotate workout partners and incorporate team exercises to help you connect with different members of the community.
                  </p>
                  <p className="text-gray-200">
                    The sense of accomplishment shared after completing a challenging workout together creates bonds that extend far beyond the gym walls. Many of our members find that the relationships built in our group classes become an essential part of their support system, both in and out of the fitness environment.
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

export default GroupClasses;