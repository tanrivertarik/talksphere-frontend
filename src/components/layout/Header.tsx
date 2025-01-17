import { Link } from 'react-router-dom';
import { useState } from 'react';
import LanguageSelector from '../common/LanguageSelector';
import { useTranslation } from '../../hooks/useTranslation';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center h-24">
          {/* Left transparent section */}
          <div className="w-8 bg-transparent"></div>

          {/* Logo and Features section */}
          <div className="bg-white rounded-lg shadow-md px-8 py-2 w-[320px]">
            <div className="flex items-center justify-between gap-8">
              <Link to="/" className="flex items-center gap-2 group">
                <img 
                  src="/assets/data-asistant.png"
                  alt="TalkSphere" 
                  className="h-6 w-6 object-contain"
                />
                <span className="text-lg font-semibold text-text">
                  Talk<span className="text-primary">Sphere</span>
                </span>
              </Link>
              <div className="h-8 w-[1px] bg-gray-200"></div>
              <a 
                href="#features" 
                onClick={scrollToFeatures}
                className="text-gray-800 font-bold px-3 py-1 rounded-md transition-all duration-200 hover:bg-gray-100 cursor-pointer"
              >
                {t('nav.features')}
              </a>
            </div>
          </div>

          {/* Middle transparent section */}
          <div className="flex-1 bg-transparent"></div>

          {/* Solutions, How it works, Pricing section */}
          <div className="bg-white rounded-lg shadow-md px-6 py-2 flex items-center justify-between">
            <Link to="/solutions" className="text-gray-800 font-bold px-3 py-1 rounded-md transition-all duration-200 hover:bg-gray-200">
              {t('nav.solutions')}
            </Link>
            <Link 
              to="/contact" 
              state={{ message: t('nav.pricing_message') }}
              className="text-gray-800 font-bold px-3 py-1 rounded-md transition-all duration-200 hover:bg-gray-200"
            >
              {t('nav.pricing')}
            </Link>
            <div className="ml-0 border-l pl-4 border-gray-200">
              <LanguageSelector />
            </div>
          </div>

          {/* Right transparent section */}
          <div className="w-8 bg-transparent"></div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16 px-4 bg-white shadow-md rounded-lg my-2">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/data-asistant.png"
              alt="TalkSphere" 
              className="h-6 w-6 object-contain"
            />
            <span className="text-lg font-semibold text-text">
              Talk<span className="text-primary">Sphere</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button 
              className="text-gray-800 p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[4.5rem] left-0 right-0 bg-white shadow-lg rounded-lg mx-4">
            <div className="px-4 py-2 space-y-1">
              <a 
                href="#features"
                onClick={(e) => {
                  scrollToFeatures(e);
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-gray-800 rounded-md transition-all duration-200 hover:bg-gray-100 cursor-pointer"
              >
                {t('nav.features')}
              </a>
              <Link 
                to="/solutions" 
                className="block px-3 py-2 text-gray-800 rounded-md transition-all duration-200 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.solutions')}
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-gray-800 rounded-md transition-all duration-200 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/contact" 
                state={{ message: t('nav.pricing_message') }}
                className="block px-3 py-2 text-gray-800 rounded-md transition-all duration-200 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.pricing')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;