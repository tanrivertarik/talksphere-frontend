import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/image.png" 
              alt="TalkSphere" 
              className="h-32 w-32 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-600 hover:text-primary">Features</Link>
            <Link to="/solutions" className="text-gray-600 hover:text-primary">Solutions</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">About</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="text-primary font-medium">Login</Link>
                <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
                  Start Free Trial
                </Link>
              </>
            ) : (
              <Link to="/dashboard" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">
                Dashboard
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/#features" className="block px-3 py-2 text-gray-600">Features</Link>
              <Link to="/solutions" className="block px-3 py-2 text-gray-600">Solutions</Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-600">Pricing</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-600">About</Link>
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="block px-3 py-2 text-primary">Login</Link>
                  <Link to="/signup" className="block px-3 py-2 bg-primary text-white rounded-lg">
                    Start Free Trial
                  </Link>
                </>
              ) : (
                <Link to="/dashboard" className="block px-3 py-2 bg-primary text-white rounded-lg">
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;