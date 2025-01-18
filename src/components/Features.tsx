import { Dumbbell, Utensils, Heart, Trophy, Star, Award } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: "Expert Training",
    description: "Personalized workout plans designed by certified fitness professionals with years of experience. Our trainers adapt each program to your specific needs and goals, ensuring optimal results."
  },
  {
    icon: Utensils,
    title: "Nutrition Guidance",
    description: "Custom meal plans and dietary advice to fuel your fitness journey. Our nutritionists create balanced, sustainable eating plans that complement your workout routine and lifestyle preferences."
  },
  {
    icon: Heart,
    title: "Wellness Focus",
    description: "Holistic approach to health combining physical and mental wellbeing. We believe in nurturing both body and mind through stress management techniques, meditation, and lifestyle coaching."
  },
  {
    icon: Trophy,
    title: "Goal Achievement",
    description: "Track your progress and celebrate milestones along the way. Our advanced tracking systems help you visualize your journey and stay motivated with regular achievement updates."
  },
  {
    icon: Star,
    title: "Community Support",
    description: "Join a vibrant community of like-minded individuals on their fitness journey. Participate in group challenges, share experiences, and find motivation through our supportive network."
  },
  {
    icon: Award,
    title: "Lifetime Results",
    description: "We focus on sustainable, long-term results through education and habit formation. Learn the principles of maintaining a healthy lifestyle that will serve you for years to come."
  }
];

const Features = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Why Choose Us</h2>
        <p className="text-lg text-center mb-12 text-white/80 max-w-2xl mx-auto">
          Transform your life with our comprehensive fitness solutions designed to help you achieve your health and wellness goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p className="text-base md:text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;