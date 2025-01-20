import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Trainers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary/10">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          Back
        </Button>
        
        <div className="max-w-6xl mx-auto space-y-16">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Our Expert Trainers</h1>
          
          {/* First Section */}
          <section className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/be825e20-dc9b-4290-bcb7-e42aa2c799fb.png" 
                alt="Personal Training Session" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-white">Personalized Guidance for Every Journey</h2>
              <p className="text-gray-200 leading-relaxed">
                Our certified personal trainers bring years of expertise and a passion for transformation to every session. They understand that each individual's fitness journey is unique, requiring a tailored approach that considers not just physical capabilities, but also personal goals, lifestyle, and preferences. Through one-on-one attention and customized workout plans, our trainers create an environment where clients feel supported, motivated, and empowered to achieve their fitness aspirations.
              </p>
              <p className="text-gray-200 leading-relaxed">
                We believe in building strong foundations and lasting relationships with our clients. Our trainers are not just fitness experts; they are mentors who guide you through every step of your wellness journey. They stay updated with the latest fitness trends and research, ensuring that you receive the most effective and scientifically-backed training methods available.
              </p>
            </div>
          </section>

          {/* Second Section */}
          <section className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/b69c6c51-7a1e-4d12-af90-7a5d184cf09a.png" 
                alt="Professional Trainer" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-white">Excellence in Training Methodology</h2>
              <p className="text-gray-200 leading-relaxed">
                Our trainers excel in developing comprehensive fitness programs that integrate various training methodologies. From strength training and cardiovascular conditioning to flexibility work and functional movement, they ensure a well-rounded approach to fitness. Their expertise extends beyond just exercise prescription – they provide valuable insights into nutrition, recovery, and lifestyle modifications that complement your training regimen.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Each trainer brings their unique specializations and certifications to our team, allowing us to match you with the perfect fitness professional for your specific needs. Whether you're looking to build strength, improve endurance, enhance athletic performance, or simply maintain a healthy lifestyle, our trainers have the knowledge and experience to guide you effectively.
              </p>
            </div>
          </section>

          {/* Third Section */}
          <section className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/73041b58-2cd4-4f02-8f64-7441e5bcf278.png" 
                alt="Group Training Session" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold text-white">Innovation in Fitness Training</h2>
              <p className="text-gray-200 leading-relaxed">
                Our training team stays at the forefront of fitness innovation, continuously incorporating new techniques and technologies into their practice. They understand that the fitness industry is ever-evolving, and they are committed to bringing the most effective and engaging training methods to our clients. This includes utilizing advanced fitness tracking technology, implementing evidence-based training protocols, and adapting programs based on the latest research in exercise science.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Beyond physical training, our experts focus on creating a supportive and motivating environment that promotes long-term success. They understand that sustainable fitness results come from a combination of expert guidance, consistent effort, and proper education. Through their comprehensive approach, they help clients develop not just stronger bodies, but also the knowledge and habits necessary for lifelong wellness.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Trainers;