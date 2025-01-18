import { Dumbbell, Utensils, Heart, Trophy } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: "Expert Training",
    description: "Personalized workout plans designed by certified fitness professionals."
  },
  {
    icon: Utensils,
    title: "Nutrition Guidance",
    description: "Custom meal plans and dietary advice to fuel your fitness journey."
  },
  {
    icon: Heart,
    title: "Wellness Focus",
    description: "Holistic approach to health combining physical and mental wellbeing."
  },
  {
    icon: Trophy,
    title: "Goal Achievement",
    description: "Track your progress and celebrate milestones along the way."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;