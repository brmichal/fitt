import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const Programs = () => {
  const navigate = useNavigate();

  const { data: programTypes, isLoading } = useQuery({
    queryKey: ['programTypes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('program_types')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data;
    },
  });

  const getProgramPath = (subdomain: string) => {
    switch (subdomain) {
      case 'pt':
        return '/programs/personal-training';
      case 'classes':
        return '/programs/group-classes';
      case 'nutrition':
        return '/programs/nutrition-plans';
      case 'coaching':
        return '/programs/online-coaching';
      default:
        return '/programs';
    }
  };

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
            
            {isLoading ? (
              <div className="text-white">Loading programs...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programTypes?.map((program) => (
                  <Link key={program.id} to={getProgramPath(program.subdomain)}>
                    <Card className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/20 transition-colors cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-white">{program.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-gray-200">
                        {program.name === 'Personal Training' && 
                          'One-on-one training sessions tailored to your specific goals and needs.'}
                        {program.name === 'Group Classes' && 
                          'Join our energetic group sessions and become part of our fitness community.'}
                        {program.name === 'Nutrition Plans' && 
                          'Customized nutrition plans for weight loss, muscle gain, and performance.'}
                        {program.name === 'Online Coaching' && 
                          'Expert guidance and support, available anywhere, anytime.'}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Programs;