import { motion } from "framer-motion";

const Training = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
          >
            Training Programs
          </motion.h1>

          {/* Entry Level Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Entry Level</h2>
                <p className="text-white/90 mb-6">
                  Perfect for those just starting their fitness journey. Our entry-level program focuses on:
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Proper form and technique fundamentals</li>
                    <li>Basic strength training exercises</li>
                    <li>Introduction to cardio routines</li>
                    <li>Flexibility and mobility work</li>
                    <li>Nutrition basics for beginners</li>
                  </ul>
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop"
                alt="Entry level training"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Experienced Level Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop"
                alt="Experienced level training"
                className="rounded-lg shadow-xl order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-white mb-4">Experienced Level</h2>
                <p className="text-white/90 mb-6">
                  For fitness enthusiasts ready to take it to the next level:
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Advanced compound movements</li>
                    <li>Periodization training cycles</li>
                    <li>High-intensity interval training (HIIT)</li>
                    <li>Sport-specific conditioning</li>
                    <li>Advanced nutrition planning</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          {/* Master Level Section */}
          <div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Master Level</h2>
                <p className="text-white/90 mb-6">
                  Elite training for those pursuing peak performance:
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Olympic lifting techniques</li>
                    <li>Advanced power development</li>
                    <li>Competition preparation</li>
                    <li>Recovery optimization</li>
                    <li>Performance nutrition strategies</li>
                  </ul>
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&auto=format&fit=crop"
                alt="Master level training"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;