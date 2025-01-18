import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "GetFitt.app completely transformed my approach to fitness. The personalized plans and support are incredible!",
    rating: 5,
    role: "Member since 2023"
  },
  {
    name: "Michael Chen",
    text: "The nutrition guidance and workout plans are top-notch. I've seen amazing results in just 3 months!",
    rating: 5,
    role: "Member since 2022"
  },
  {
    name: "Emma Davis",
    text: "Best fitness platform I've ever used. The community support and expert guidance make all the difference.",
    rating: 5,
    role: "Member since 2023"
  },
  {
    name: "James Wilson",
    text: "The personalized approach and constant support helped me achieve my fitness goals faster than I expected.",
    rating: 5,
    role: "Member since 2022"
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Members Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real feedback from our dedicated community members
        </p>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <div className="bg-white dark:bg-primary rounded-xl p-8 shadow-lg">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-lg text-center mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="text-center">
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
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

export default TestimonialsCarousel;