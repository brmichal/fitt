import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="mr-2" />
          Back
        </Button>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary dark:text-white">
          About GetFitt.app
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Our Mission</h2>
              <p className="text-muted-foreground">
                At GetFitt.app, we're dedicated to transforming lives through accessible, personalized fitness solutions. Our mission is to make professional fitness guidance available to everyone, anywhere.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Our Approach</h2>
              <p className="text-muted-foreground">
                We combine cutting-edge technology with expert fitness knowledge to create customized workout and nutrition plans that adapt to your unique needs, goals, and lifestyle.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Our Values</h2>
              <p className="text-muted-foreground">
                We believe in transparency, scientific evidence, and continuous improvement. Our commitment to these values ensures that you receive the highest quality fitness guidance and support.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-6 text-center text-primary dark:text-white">Why Choose Us?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With years of experience in fitness and nutrition, our team of experts is passionate about helping you achieve your health and fitness goals. We understand that every individual is unique, which is why we offer personalized solutions tailored to your specific needs.
                </p>
                <p>
                  Our innovative platform combines artificial intelligence with human expertise to deliver a comprehensive fitness experience that evolves with you. Whether you're just starting your fitness journey or looking to take your training to the next level, we're here to support you every step of the way.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
