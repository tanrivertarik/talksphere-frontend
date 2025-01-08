import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-40 pb-40 bg-cover bg-center relative" 
      style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-stone-50 mb-6 font-['NeueMachina']">
            Yapay Zeka Destekli İletişim ile Müşteri Deneyimini Geliştirin
          </h1>
          <p className="text-xl text-stone-100 mb-8">
            TalkSphere, işletmelerin yapay zeka aracılığıyla verimli ve etkili 
            müşteri iletişimi sunmasını sağlayan modern bir SaaS çözümüdür.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" className="bg-stone-800 hover:bg-stone-900 text-white shadow-lg">
              Nasıl Çalışır
            </Button>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white bg-opacity-50 text-stone-800 border-stone-800 
                         hover:bg-stone-100 hover:text-stone-900"
              >
                Daha Fazla Bilgi
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;