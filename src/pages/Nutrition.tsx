import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 mb-6 text-primary">
            Nutrition: Your Path to Optimal Health
          </h1>

          <img
            src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
            alt="Fresh healthy food"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          />

          <section className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Understanding the Foundation of Health</h2>
            <p>
              At GetFitt.app, we believe that nutrition is the cornerstone of overall health and fitness success. Our approach to nutrition goes beyond simple calorie counting – we focus on developing sustainable, enjoyable eating habits that nourish your body and support your fitness goals. Whether you're looking to build muscle, lose weight, or simply maintain a healthy lifestyle, proper nutrition is the key to achieving your objectives.
            </p>

            <p>
              Our comprehensive nutrition program is designed to provide you with the knowledge and tools needed to make informed decisions about your diet. We understand that everyone's nutritional needs are different, which is why we offer personalized meal plans and guidance tailored to your specific goals, preferences, and lifestyle.
            </p>

            <img
              src="https://images.unsplash.com/photo-1501286353178-1ec881214838"
              alt="Healthy meal preparation"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg my-8"
            />

            <h2 className="text-2xl font-semibold mb-4">The Science Behind Our Approach</h2>
            <p>
              Our nutrition philosophy is grounded in scientific research and proven methodologies. We focus on macronutrient balance, timing of meals, and quality of ingredients to optimize your body's performance and recovery. Our team of certified nutritionists stays up-to-date with the latest research and dietary guidelines to ensure you receive the most current and effective nutritional advice.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Key Components of Our Nutrition Program</h2>
            <ul>
              <li>Personalized meal planning based on your specific goals and preferences</li>
              <li>Macro and micronutrient optimization for peak performance</li>
              <li>Education on proper portion control and mindful eating</li>
              <li>Guidance on supplement selection and timing</li>
              <li>Regular progress monitoring and plan adjustments</li>
              <li>Support for special dietary requirements and restrictions</li>
            </ul>

            <img
              src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
              alt="Healthy ingredients"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg my-8"
            />

            <h2 className="text-2xl font-semibold mb-4">Beyond the Basics</h2>
            <p>
              Our nutrition program goes beyond just telling you what to eat. We provide comprehensive education on:
            </p>
            <ul>
              <li>Understanding food labels and making informed choices</li>
              <li>Meal prep strategies for busy lifestyles</li>
              <li>Navigating social situations while maintaining your nutrition goals</li>
              <li>Developing a healthy relationship with food</li>
              <li>Strategies for sustainable long-term success</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">The Role of Nutrition in Performance</h2>
            <p>
              Proper nutrition is essential for optimal athletic performance and recovery. Our program helps you understand how different nutrients affect your body and how to fuel yourself properly for different types of activities. Whether you're an endurance athlete, strength trainer, or recreational exerciser, we'll help you develop a nutrition strategy that enhances your performance and supports your goals.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Sustainable Habits for Lifetime Success</h2>
            <p>
              We believe in creating sustainable, long-term habits rather than promoting quick fixes or fad diets. Our approach focuses on teaching you how to make informed decisions about your nutrition that you can maintain for life. We'll help you understand the why behind our recommendations, empowering you to make confident choices about your nutrition long after you've completed our program.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Nutrition?</h3>
              <p>
                Join our nutrition program today and discover how proper nutrition can transform your health, performance, and overall well-being. Our team of experts is ready to guide you on your journey to optimal health through personalized nutrition coaching and support.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nutrition;