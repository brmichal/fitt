import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/f139e559-e896-4d61-be20-34e442ec8da5.png" 
              alt="GFA Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-primary ml-2">GetFitt.app</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Training</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Nutrition</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">Training</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">Nutrition</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">About</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;