import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f139e559-e896-4d61-be20-34e442ec8da5.png" 
                alt="GFA Logo" 
                className="h-8 w-auto mr-2"
              />
              <h3 className="text-2xl font-bold text-secondary">FitLife</h3>
            </div>
            <p className="text-sm opacity-90">Transform your life through expert-led fitness training and nutrition guidance.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Trainers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Personal Training</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Group Classes</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Nutrition Plans</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Online Coaching</a></li>
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
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} FitLife. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;