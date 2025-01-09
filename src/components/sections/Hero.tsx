import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-60 pb-60 bg-cover bg-center relative min-h-[90vh] flex items-center overflow-hidden" 
      style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-[2px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Yapay Zeka ile Müşteri İletişimini Baştan Yaratın
            </h1>
            <p className="text-lg sm:text-xl text-stone-100 max-w-3xl mx-auto leading-relaxed">
            TalkSphere, her etkileşimde verimliliği ve memnuniyeti en üst düzeye çıkaran modern bir SaaS çözümüdür. Yapay zeka destekli iletişimle müşterilerinize daima doğru ve hızlı cevabı sunun.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Link to="/how-it-works" className="inline-block">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-primary hover:bg-primary-alt text-white font-semibold px-8 py-4 rounded-lg
                         transform transition-all duration-200 hover:scale-[1.02] shadow-lg
                         hover:shadow-primary/20"
              >
                Nasıl Çalışır
              </Button>
            </Link>
            <Link to="/contact" className="inline-block">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-lg
                         backdrop-blur-sm hover:bg-white/20 font-semibold transform transition-all 
                         duration-200 hover:scale-[1.02] shadow-lg w-full sm:w-auto"
              >
                Daha Fazla Bilgi
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;