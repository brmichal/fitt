import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const transformations = [
  {
    image: "/lovable-uploads/ba7f135f-5e35-4748-8685-d4428173d2ea.png",
    name: "Emily Anderson",
    location: "Denver, Colorado",
    rating: 5,
    description: "Transformed my lifestyle with GetFitt.app's comprehensive program. Lost 25 lbs and gained incredible confidence in just 6 months.",
  },
  {
    image: "/lovable-uploads/35f18a60-c098-49ce-8982-309c3d88b1fd.png",
    name: "Michael Thompson",
    location: "Austin, Texas",
    rating: 5,
    description: "From skinny to strong - gained 20 lbs of lean muscle and completely changed my physique with GetFitt.app's structured training program.",
  },
  {
    image: "/lovable-uploads/8d432a97-ef90-4de1-a056-0f301024ade2.png",
    name: "Sarah Martinez",
    location: "Seattle, Washington",
    rating: 5,
    description: "Found my strength and confidence through GetFitt.app. The personalized nutrition plans and workouts helped me achieve my dream physique.",
  },
  {
    image: "/lovable-uploads/19275c67-b380-4adb-90fa-e70b4dd5a2d2.png",
    name: "David Wilson",
    location: "Boston, Massachusetts",
    rating: 5,
    description: "From scrawny to muscular in 8 months. GetFitt.app's program helped me build the body I always wanted.",
  },
  {
    image: "/lovable-uploads/de060a74-999e-4fb1-a789-262eb5c0d0a7.png",
    name: "Samanta Rodriguez",
    location: "Miami, Florida",
    rating: 5,
    description: "Completely transformed my body and mindset. GetFitt.app's holistic approach helped me build muscle and strength like never before.",
  },
];

const TransformationCarousel = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Success Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real results from real people who trusted GetFitt.app
        </p>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {transformations.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <div className="mb-8 aspect-square max-w-2xl mx-auto">
                    <img
                      src={item.image}
                      alt={`${item.name}'s transformation`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="text-center max-w-xl mx-auto">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                    <div className="flex justify-center mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TransformationCarousel;