import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Programs = () => {
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
        
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-white mb-8">Our Programs</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/programs/personal-training">
                <Card className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-white">Personal Training</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-200">
                    One-on-one training sessions tailored to your specific goals and needs.
                  </CardContent>
                </Card>
              </Link>

              <Link to="/programs/group-classes">
                <Card className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-white">Group Classes</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-200">
                    Join our energetic group sessions and become part of our fitness community.
                  </CardContent>
                </Card>
              </Link>

              <Link to="/programs/nutrition-plans">
                <Card className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-white">Nutrition Plans</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-200">
                    Customized nutrition plans for weight loss, muscle gain, and performance.
                  </CardContent>
                </Card>
              </Link>

              <Link to="/programs/online-coaching">
                <Card className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-white">Online Coaching</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-200">
                    Expert guidance and support, available anywhere, anytime.
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Programs;