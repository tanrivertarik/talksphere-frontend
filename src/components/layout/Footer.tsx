import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { Squares } from '../ui/squares-background';

interface FooterLink {
  name: string;
  href: string;
  state?: {
    message: string;
  };
  onClick?: (e: React.MouseEvent) => void;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks: Record<string, FooterSection> = {
    product: {
      title: t('footer.product'),
      links: [
        { 
          name: t('footer.links.product.features'), 
          href: '/#features',
          onClick: scrollToFeatures
        },
        { 
          name: t('footer.links.product.pricing'), 
          href: '/contact', 
          state: { message: t('footer.links.product.pricing_message') } 
        },
      ],
    },
    company: {
      title: t('footer.company'),
      links: [
        { 
          name: t('footer.links.company.about'), 
          href: '/about' 
        },
        { 
          name: t('footer.links.company.contact'), 
          href: '/contact' 
        },
      ],
    },
    legal: {
      title: t('footer.legal'),
      links: [
        { 
          name: t('footer.links.legal.privacy'), 
          href: '/privacy' 
        },
        { 
          name: t('footer.links.legal.data_protection'), 
          href: '/kvkk' 
        },
      ],
    },
    social: {
      title: t('footer.social'),
      links: [
        { 
          name: t('footer.links.social.twitter'), 
          href: 'https://x.com/' 
        },
        { 
          name: t('footer.links.social.linkedin'), 
          href: 'https://linkedin.com/' 
        },
      ],
    },
  };

  const bottomLinks: FooterLink[] = [
    { name: t('footer.links.bottom.privacy'), href: '/privacy' },
    { name: t('footer.links.bottom.cookies'), href: '/cookies' }
  ];

  return (
    <footer className="bg-black/40 border-t border-white/10 relative">
      <div className="absolute inset-0 -z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="rgba(255,255,255,0.1)"
          squareSize={50}
          hoverFillColor="rgba(255,255,255,0.02)"
        />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Logo and Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-6 group">
            <div className="relative bg-white rounded-xl p-2">
              <img 
                src="/assets/data-asistant.png" 
                alt="TalkSphere Assistant" 
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-10 h-10 rounded-lg bg-primary/10 hidden items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="absolute -inset-2 bg-white/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-semibold text-white ml-3">
              Talk<span className="text-primary">Sphere</span>
            </span>
          </div>
          <p className="text-white/70 max-w-md text-lg leading-relaxed">
            {t('footer.description')}
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
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary/20 rounded-full" />
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      state={link.state}
                      onClick={link.onClick}
                      className="text-white/70 hover:text-primary transition-all duration-300 group relative inline-block"
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
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-white/70 text-sm">
              © {currentYear} TalkSphere. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-8">
              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/70 hover:text-primary text-sm transition-all duration-300 relative group"
                >
                  <span className="relative z-10">{link.name}</span>
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