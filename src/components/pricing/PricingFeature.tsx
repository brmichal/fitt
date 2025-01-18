import { Check } from 'lucide-react';

interface PricingFeatureProps {
  feature: string;
}

export const PricingFeature = ({ feature }: PricingFeatureProps) => (
  <li className="flex items-center gap-2">
    <Check className="h-5 w-5 text-secondary flex-shrink-0" />
    <span>{feature}</span>
  </li>
);