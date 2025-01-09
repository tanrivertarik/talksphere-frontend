import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FooterLink {
  name: string;
  href: string;
  state?: {
    message: string;
  };
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerLinks: Record<string, FooterSection> = {
  product: {
    title: 'Ürün',
    links: [
      { name: 'Özellikler', href: '/features' },
      { name: 'Fiyatlandırma', href: '/contact', state: { message: "Şirketinize özel fiyatlandırma için bize ulaşın." } },
    ],
  },
  company: {
    title: 'Şirket',
    links: [
      { name: 'Hakkımızda', href: '/about' },
      { name: 'İletişim', href: '/contact' },
    ],
  },
  legal: {
    title: 'Yasal',
    links: [
      { name: 'Gizlilik Politikası', href: '/privacy' },
      { name: 'Kullanım Koşulları', href: '/terms' },
      { name: 'KVKK', href: '/gdpr' },
    ],
  },
  social: {
    title: 'Sosyal Medya',
    links: [
      { name: 'Twitter', href: 'https://twitter.com/talksphere' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/talksphere' },
    ],
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-alt border-t border-accent/10">
      <div className="container mx-auto px-4 py-16">
        {/* Logo and Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-6 group">
            <div className="relative bg-background-light rounded-xl p-2">
              <img 
                src="/assets/data-asistant.png" 
                alt="TalkSphere Assistant" 
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="absolute -inset-2 bg-primary/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-semibold text-text ml-3">
              Talk<span className="text-primary">Sphere</span>
            </span>
          </div>
          <p className="text-text-alt max-w-md text-lg leading-relaxed">
            Yapay zeka destekli müşteri iletişim platformu ile işletmenizi geleceğe taşıyın.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-text font-semibold text-lg mb-6 relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary/20 rounded-full" />
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      state={link.state}
                      className="text-text-alt hover:text-primary transition-all duration-300 group relative inline-block"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/20 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-accent/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-text-alt text-sm">
              © {currentYear} TalkSphere. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-8">
              {['Gizlilik', 'Koşullar', 'Çerezler'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-text-alt hover:text-primary text-sm transition-all duration-300 relative group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/20 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;