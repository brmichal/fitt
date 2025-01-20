import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f139e559-e896-4d61-be20-34e442ec8da5.png" 
                alt="GFA Logo" 
                className="h-8 w-auto mr-2"
              />
              <h3 className="text-xl md:text-2xl font-bold text-secondary">GetFitt.app</h3>
            </div>
            <p className="text-sm opacity-90">Transform your life through expert-led fitness training and nutrition guidance.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/aboutus" className="text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-sm hover:text-accent transition-colors">Programs</Link></li>
              <li><Link to="/trainers" className="text-sm hover:text-accent transition-colors">Trainers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/programs/personal-training" className="text-sm hover:text-accent transition-colors">Personal Training</Link></li>
              <li><Link to="/programs/group-classes" className="text-sm hover:text-accent transition-colors">Group Classes</Link></li>
              <li><Link to="/programs/nutrition-plans" className="text-sm hover:text-accent transition-colors">Nutrition Plans</Link></li>
              <li><Link to="/programs/online-coaching" className="text-sm hover:text-accent transition-colors">Online Coaching</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <img src="https://cdn.jsdelivr.net/gh/transferwise/currency-flags/src/flags/usd.svg" alt="Visa" className="h-8" />
            <img src="https://cdn.jsdelivr.net/gh/transferwise/currency-flags/src/flags/eur.svg" alt="Mastercard" className="h-8" />
            <img src="https://cdn.jsdelivr.net/gh/transferwise/currency-flags/src/flags/gbp.svg" alt="American Express" className="h-8" />
            <img src="https://cdn.jsdelivr.net/gh/transferwise/currency-flags/src/flags/chf.svg" alt="Apple Pay" className="h-8" />
            <img src="https://cdn.jsdelivr.net/gh/transferwise/currency-flags/src/flags/sek.svg" alt="Google Pay" className="h-8" />
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2022 GetFitt.app. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;