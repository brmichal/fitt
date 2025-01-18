import { Button } from '../ui/button';
import { PricingFeature } from './PricingFeature';
import { PricingPrice } from './PricingPrice';

interface PricingCardProps {
  title: string;
  price: string;
  oldPrice: string;
  description: string;
  features: string[];
  gradient: string;
  isPopular?: boolean;
}

export const PricingCard = ({ 
  title, 
  price, 
  oldPrice,
  description, 
  features,
  gradient,
  isPopular
}: PricingCardProps) => (
  <div className={`relative p-6 rounded-xl ${gradient} text-white transition-transform hover:scale-105 duration-300 h-full flex flex-col`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
    <PricingPrice price={price} oldPrice={oldPrice} />
    <p className="text-sm mb-6 opacity-90 text-center min-h-[48px] flex items-center justify-center">
      {description}
    </p>
    <ul className="space-y-3 flex-grow">
      {features.map((feature, index) => (
        <PricingFeature key={index} feature={feature} />
      ))}
    </ul>
    <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-primary font-semibold">
      Get Started
    </Button>
  </div>
);