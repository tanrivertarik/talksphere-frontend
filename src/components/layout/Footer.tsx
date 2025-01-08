import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-300 text-stone-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-bold text-stone-800">TalkSphere</span>
            <p className="mt-4 text-stone-700">
              Gerçek zamanlı etkileşim çözümleriyle müşteri deneyiminizi dönüştürün.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-800">Ürün</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-stone-600 hover:text-stone-800">Özellikler</Link></li>
              <li><Link to="/solutions" className="text-stone-600 hover:text-stone-800">Çözümler</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-800">Şirket</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-stone-600 hover:text-stone-800">Hakkımızda</Link></li>
              <li><Link to="/contact" className="text-stone-600 hover:text-stone-800">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-800">Yasal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-stone-600 hover:text-stone-800">Gizlilik Politikası</Link></li>
              <li><Link to="/terms" className="text-stone-600 hover:text-stone-800">Kullanım Koşulları</Link></li>
              <li><Link to="/security" className="text-stone-600 hover:text-stone-800">Güvenlik</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-700">© 2025 TalkSphere. Tüm hakları saklıdır.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://twitter.com" className="text-stone-600 hover:text-stone-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-stone-600 hover:text-stone-800">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" className="text-stone-600 hover:text-stone-800">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;