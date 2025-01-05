import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sky-100 text-sky-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold text-sky-800">TalkSphere</span>
            <p className="mt-4 text-sky-700">
              Gerçek zamanlı etkileşim çözümleriyle müşteri deneyiminizi dönüştürün.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-800">Ürün</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sky-600 hover:text-sky-800">Özellikler</Link></li>
              <li><Link to="/solutions" className="text-sky-600 hover:text-sky-800">Çözümler</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-800">Şirket</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sky-600 hover:text-sky-800">Hakkımızda</Link></li>
              <li><Link to="/contact" className="text-sky-600 hover:text-sky-800">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-800">Yasal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sky-600 hover:text-sky-800">Gizlilik Politikası</Link></li>
              <li><Link to="/terms" className="text-sky-600 hover:text-sky-800">Kullanım Koşulları</Link></li>
              <li><Link to="/security" className="text-sky-600 hover:text-sky-800">Güvenlik</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sky-700">© 2025 TalkSphere. Tüm hakları saklıdır.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://twitter.com" className="text-sky-600 hover:text-sky-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-sky-600 hover:text-sky-800">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" className="text-sky-600 hover:text-sky-800">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;