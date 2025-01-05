import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

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
        Özellikler
      </Link>
      <Link
        to="/solutions"
        className={`text-gray-600 hover:text-primary ${
          isActive('/solutions') ? 'text-primary' : ''
        }`}
      >
        Çözümler
      </Link>
      <Link
        to="/about"
        className={`text-gray-600 hover:text-primary ${
          isActive('/about') ? 'text-primary' : ''
        }`}
      >
        Hakkımızda
      </Link>
    </nav>
  );
};

export default Navigation;