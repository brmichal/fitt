import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Replace with your Mapbox token
    
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
            
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold text-white">Visit Our Location</h2>
                <p className="text-gray-200">
                  Linkstraße 2, 10785 Berlin
                </p>
              </div>

              <div ref={mapContainer} className="w-full h-[400px] rounded-lg shadow-lg" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;