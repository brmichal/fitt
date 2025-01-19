import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { Link } from 'react-router-dom';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md dark:bg-background/95' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/lovable-uploads/f139e559-e896-4d61-be20-34e442ec8da5.png" 
              alt="GFA Logo" 
              className="h-8 w-auto"
            />
            <span className={`text-xl md:text-2xl font-bold ml-2 ${isScrolled ? 'text-primary dark:text-white' : 'text-white'}`}>
              GetFitt.app
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'} hover:text-accent transition-colors`}>Home</Link>
            <Link to="#" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'} hover:text-accent transition-colors`}>Training</Link>
            <Link to="#" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'} hover:text-accent transition-colors`}>Nutrition</Link>
            <Link to="/aboutus" className={`${isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'} hover:text-accent transition-colors`}>About Us</Link>
            <DarkModeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`${isScrolled ? 'text-primary dark:text-white' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background dark:bg-primary rounded-lg shadow-lg mt-2">
              <Link to="/" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors">Home</Link>
              <Link to="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors">Training</Link>
              <Link to="#" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors">Nutrition</Link>
              <Link to="/aboutus" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-accent transition-colors">About Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;