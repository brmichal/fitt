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
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    name: "John D.",
    rating: 5,
    description: "Lost 30kg in 6 months following GetFitt.app program",
  },
  {
    before: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
    after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    name: "Sarah M.",
    rating: 5,
    description: "Achieved my dream body in just 8 months",
  },
  {
    before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
    after: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    name: "Mike R.",
    rating: 5,
    description: "Transformed my lifestyle completely with GetFitt.app",
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
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {transformations.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-2">Before</p>
                      <img
                        src={item.before}
                        alt={`${item.name} before transformation`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-2">After</p>
                      <img
                        src={item.after}
                        alt={`${item.name} after transformation`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
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