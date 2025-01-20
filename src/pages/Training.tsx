import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Training = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 pt-20">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="mr-2" />
          Back
        </Button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Training Programs
          </h1>

          {/* Entry Level */}
          <section className="bg-background/90 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">Entry Level</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Perfect for those just starting their fitness journey. Our entry-level program focuses on building proper form, understanding basic movement patterns, and developing a strong foundation in fitness principles.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Introduction to basic compound movements</li>
                  <li>Proper form and technique training</li>
                  <li>Cardiovascular conditioning basics</li>
                  <li>Flexibility and mobility work</li>
                </ul>
              </div>
              <img 
                src="/lovable-uploads/2a933066-58d7-4346-ab92-9822e8b88856.png" 
                alt="Entry Level Training" 
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </section>

          {/* Experienced Level */}
          <section className="bg-background/90 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">Experienced Level</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img 
                src="/lovable-uploads/1f891b2e-608f-4443-b1c4-f99e2f81d2a9.png" 
                alt="Experienced Training" 
                className="rounded-lg object-cover w-full h-64"
              />
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For those who have mastered the basics and are ready to take their training to the next level. This program incorporates advanced techniques and varied training methodologies.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Advanced compound movement variations</li>
                  <li>Periodization training</li>
                  <li>Sport-specific conditioning</li>
                  <li>Progressive overload techniques</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Master Level */}
          <section className="bg-background/90 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">Master Level</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed for elite athletes and experienced fitness enthusiasts. This program pushes the boundaries of performance and focuses on achieving peak physical condition.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Olympic lifting techniques</li>
                  <li>Advanced power development</li>
                  <li>Competition preparation</li>
                  <li>Peak performance optimization</li>
                </ul>
              </div>
              <img 
                src="/lovable-uploads/49d11a93-6299-4901-8bb1-b5988a05566a.png" 
                alt="Master Level Training" 
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Training;