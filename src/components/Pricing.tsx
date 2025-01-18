import { Check } from 'lucide-react';
import { Button } from './ui/button';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features,
  gradient,
  isPopular
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  gradient: string;
  isPopular?: boolean;
}) => (
  <div className={`relative p-6 rounded-xl ${gradient} text-white transition-transform hover:scale-105 duration-300 h-full flex flex-col`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
    <div className="text-center mb-2">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-lg font-normal">/month</span>
    </div>
    <p className="text-sm mb-6 opacity-90 text-center min-h-[48px] flex items-center justify-center">{description}</p>
    <ul className="space-y-3 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="h-5 w-5 text-secondary flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-primary font-semibold">
      Get Started
    </Button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Lifestyle Plan",
      price: "29",
      description: "For building sustainable and long-term habits",
      features: [
        "Diet Plan for 5 days/week",
        "Nutrition Plan included",
        "Individual approach",
        "Goal Analysis"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Performance Plan",
      price: "39",
      description: "Designed for athletic or fitness performance",
      features: [
        "Diet Plan for 6 days/week",
        "Nutrition Plan included",
        "Individual approach",
        "Goal Analysis",
        "Training Program",
        "Email Support"
      ],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Transformation Plan",
      price: "49",
      description: "A complete body and health overhaul",
      features: [
        "Diet Plan for 7 days/week",
        "Nutrition Plan included",
        "Individual approach",
        "Goal Analysis",
        "Training Program",
        "Track Your Progress",
        "Priority Email Support",
        "Mental Health Consultation",
        "Blood test Analysis"
      ],
      gradient: "bg-gradient-accent",
      isPopular: true
    }
  ];

  return (
    <section className="py-20 px-4 overflow-x-auto">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Choose Your Plan</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Transform your life with our expertly crafted fitness and nutrition plans
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {plans.map((plan, index) => (
            <div key={index} className="h-full">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;