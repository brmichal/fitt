import { PricingCard } from './pricing/PricingCard';

const Pricing = () => {
  const plans = [
    {
      title: "Lifestyle Plan",
      price: "29",
      oldPrice: "99",
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
      oldPrice: "119",
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
      oldPrice: "149",
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