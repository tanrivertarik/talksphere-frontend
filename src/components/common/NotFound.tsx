import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 leading-none">
              404
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Aradığınız Sayfaya Ulaşılamadı
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönerek devam edebilirsiniz.
          </p>
          <div className="space-x-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
              Ana Sayfaya Dön
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound; 