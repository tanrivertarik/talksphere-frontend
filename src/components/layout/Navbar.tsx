import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSelector from '../common/LanguageSelector';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left Section */}
          <Link to="/" className="flex items-center space-x-2">
            <i className="fab fa-instagram text-2xl text-[#2F2F2F]"></i>
            <span className="font-bold text-xl">Talk<span className="text-[#058C42]">Sphere</span></span>
          </Link>

          {/* Navigation Links - Center Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/features" 
              className="text-[#2F2F2F] hover:text-[#058C42] transition-colors"
            >
              {t('nav.features')}
            </Link>
            <Link 
              to="/solutions" 
              className="text-[#2F2F2F] hover:text-[#058C42] transition-colors"
            >
              {t('nav.solutions')}
            </Link>
            <Link 
              to="/about" 
              className="text-[#2F2F2F] hover:text-[#058C42] transition-colors"
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/pricing" 
              className="text-[#2F2F2F] hover:text-[#058C42] transition-colors"
            >
              {t('nav.pricing')}
            </Link>
          </div>

          {/* Language Selector - Right Section */}
          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 