import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NutritionPlans = () => {
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
            <h1 className="text-4xl font-bold text-white mb-8">Nutrition Plans</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <img 
                src="/lovable-uploads/4e33b590-268c-4cd9-bcbc-ea07efff459a.png"
                alt="Healthy Meal" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="/lovable-uploads/8e79872f-6fab-4ae6-b530-e408532901d8.png"
                alt="Healthy Eating" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-none">
                <CardHeader>
                  <CardTitle className="text-white">Weight Loss Plan</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200">
                  <p>Our weight loss nutrition plan is scientifically designed to help you shed unwanted pounds while maintaining muscle mass and energy levels. We focus on creating a sustainable caloric deficit through nutrient-dense, satisfying meals that keep you feeling full and energized throughout the day.</p>
                  <p className="mt-4">Key features:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Personalized calorie targets</li>
                    <li>Macro-nutrient optimization</li>
                    <li>Meal timing strategies</li>
                    <li>Hunger management techniques</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-none">
                <CardHeader>
                  <CardTitle className="text-white">Muscle Gain Plan</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200">
                  <p>Our muscle gain nutrition plan provides the perfect balance of proteins, carbohydrates, and healthy fats to support muscle growth and recovery. We emphasize quality protein sources and strategic nutrient timing to maximize your training results.</p>
                  <p className="mt-4">Key features:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>High-protein meal planning</li>
                    <li>Pre/post workout nutrition</li>
                    <li>Supplement recommendations</li>
                    <li>Progressive calorie increases</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-none">
                <CardHeader>
                  <CardTitle className="text-white">Performance Plan</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200">
                  <p>Designed for athletes and active individuals, our performance nutrition plan optimizes your diet for enhanced endurance, strength, and recovery. We focus on providing the right nutrients at the right time to support your training demands.</p>
                  <p className="mt-4">Key features:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Sport-specific nutrition timing</li>
                    <li>Hydration strategies</li>
                    <li>Competition day meal plans</li>
                    <li>Recovery optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-none">
                <CardHeader>
                  <CardTitle className="text-white">Maintenance Plan</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200">
                  <p>Our maintenance plan helps you sustain your results while enjoying a flexible, balanced approach to nutrition. Perfect for those who have reached their goals and want to maintain their progress long-term.</p>
                  <p className="mt-4">Key features:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Balanced macro distribution</li>
                    <li>Flexible meal planning</li>
                    <li>Social eating strategies</li>
                    <li>Long-term sustainability</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlans;