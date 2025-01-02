import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navigation = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex items-center space-x-8">
      <Link
        to="/#features"
        className={`text-gray-600 hover:text-primary ${
          isActive('/#features') ? 'text-primary' : ''
        }`}
      >
        Features
      </Link>
      <Link
        to="/solutions"
        className={`text-gray-600 hover:text-primary ${
          isActive('/solutions') ? 'text-primary' : ''
        }`}
      >
        Solutions
      </Link>
      <Link
        to="/pricing"
        className={`text-gray-600 hover:text-primary ${
          isActive('/pricing') ? 'text-primary' : ''
        }`}
      >
        Pricing
      </Link>
      <Link
        to="/about"
        className={`text-gray-600 hover:text-primary ${
          isActive('/about') ? 'text-primary' : ''
        }`}
      >
        About
      </Link>
      {!isAuthenticated ? (
        <>
          <Link
            to="/login"
            className="text-primary font-medium hover:text-primary-dark"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
          >
            Start Free Trial
          </Link>
        </>
      ) : (
        <Link
          to="/dashboard"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          Dashboard
        </Link>
      )}
    </nav>
  );
};

export default Navigation;