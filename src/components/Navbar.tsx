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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/f139e559-e896-4d61-be20-34e442ec8da5.png" 
              alt="GFA Logo" 
              className="h-8 w-auto"
            />
            <span className={`text-xl md:text-2xl font-bold ml-2 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              GetFitt.app
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-accent transition-colors`}>Home</a>
            <a href="#" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-accent transition-colors`}>Training</a>
            <a href="#" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-accent transition-colors`}>Nutrition</a>
            <a href="#" className={`${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-accent transition-colors`}>About</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-accent transition-colors">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-accent transition-colors">Training</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-accent transition-colors">Nutrition</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-accent transition-colors">About</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;