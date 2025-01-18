import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TransformationCarousel from '../components/TransformationCarousel';
import Pricing from '../components/Pricing';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TransformationCarousel />
      <Pricing />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default Index;