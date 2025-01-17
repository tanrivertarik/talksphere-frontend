import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { Squares } from '../ui/squares-background';
import { HoverEffect } from '../ui/hover-effect';

const Features = () => {
  const { t, language } = useTranslation();

  return (
    <section id="features" className="pt-48 pb-48 bg-[#060606] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-bold text-white leading-tight">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-[55%] relative bg-white/90 rounded-[24px] overflow-hidden shadow-xl">
              <div className="aspect-[464/800] w-[98%] h-[98%] mx-auto my-[1%] rounded-[4px] overflow-hidden">
                <img 
                  src={language === 'en' ? "/assets/talksphere-en.gif" : "/assets/talksphere.gif"}
                  alt="TalkSphere Demo"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <HoverEffect
          items={(t('features.list', { returnObjects: true }) as Array<{
            title: string;
            description: string;
            icon: React.ReactNode;
          }>).map(feature => ({
            title: feature.title,
            description: feature.description,
            link: '#'  // You can add actual links if needed
          }))}
          className="mt-16"
        />
      </div>
    </section>
  );
};

export default Features;