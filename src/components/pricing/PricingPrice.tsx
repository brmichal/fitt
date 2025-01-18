interface PricingPriceProps {
  price: string;
  oldPrice: string;
  isDark?: boolean;
}

export const PricingPrice = ({ price, oldPrice, isDark }: PricingPriceProps) => (
  <div className="text-center mb-2">
    <div className="flex items-center justify-center gap-2">
      <span className="text-red-500 line-through text-2xl">${oldPrice}</span>
      <div className="flex items-baseline">
        <span className={`text-4xl font-bold ${isDark ? 'text-green-300' : 'text-green-400'}`}>${price}</span>
        <span className="text-lg font-normal ml-1">/month</span>
      </div>
    </div>
  </div>
);