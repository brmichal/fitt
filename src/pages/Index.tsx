import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CounterBlock from '../components/CounterBlock';
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
      <CounterBlock />
      <Features />
      <TransformationCarousel />
      <Pricing />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default Index;