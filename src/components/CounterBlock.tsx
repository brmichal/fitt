import { Users, Flame, CheckCircle, Target, Trophy } from "lucide-react";
import CountUp from "react-countup";

const counters = [
  {
    icon: Users,
    value: 21,
    suffix: "+",
    description: "countries we are",
  },
  {
    icon: Flame,
    value: 10000000,
    suffix: "+",
    description: "calories burnt",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    description: "plan satisfaction",
  },
  {
    icon: Target,
    value: 50000,
    suffix: "+",
    description: "active members",
  },
  {
    icon: Trophy,
    value: 95,
    suffix: "%",
    description: "success rate",
  },
];

const CounterBlock = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-white dark:bg-primary shadow-lg animate-fade-in"
            >
              <counter.icon className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2">
                <CountUp
                  start={0}
                  end={counter.value}
                  duration={2.5}
                  separator=","
                  suffix={counter.suffix}
                />
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {counter.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterBlock;