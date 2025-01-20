import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const Contact = () => {
  const navigate = useNavigate();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  const form = useForm<ContactFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    toast.success('Message sent successfully! We will get back to you soon.');
    form.reset();
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // For development purposes, we'll use a temporary input for the Mapbox token
    const token = prompt('Please enter your Mapbox public token (you can get it from mapbox.com):');
    if (token) {
      setMapboxToken(token);
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [13.3738, 52.5079], // Berlin coordinates
        zoom: 15
      });

      // Add marker
      new mapboxgl.Marker()
        .setLngLat([13.3738, 52.5079])
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    return () => {
      map.current?.remove();
    };
  }, []);

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
            <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Get in Touch</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 234 567 890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?"
                              className="min-h-[120px]"
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Visit Our Location</h2>
                <p className="text-gray-200">
                  Linkstraße 2, 10785 Berlin
                </p>
                <div ref={mapContainer} className="w-full h-[400px] rounded-lg shadow-lg" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;