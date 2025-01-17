import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { SplineScene } from '../ui/splite';
import { Spotlight } from '../ui/spotlight';
import { Card } from '../ui/card';
import { Squares } from '../ui/squares-background';
import { StarBorder } from '../ui/star-border';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-60 pb-60 bg-[#060606] relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="right"
          speed={0.4}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <Card className="w-full bg-black/80 relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
          />
          
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left content */}
            <motion.div 
              className="flex-1 p-8 relative z-10 flex flex-col justify-center text-center lg:text-left"
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  {t('home.title')}
                </h1>
                <p className="text-lg sm:text-xl text-stone-100 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  {t('home.description')}
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 mt-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <Link to="/how-it-works">
                  <StarBorder 
                    as="div"
                    color="#fff"
                    speed="4s"
                    className="hover:scale-[1.02] transition-transform duration-200 text-white"
                  >
                    {t('home.how_it_works')}
                  </StarBorder>
                </Link>
                <Link to="/contact">
                  <StarBorder 
                    as="div"
                    color="#fff"
                    speed="4s"
                    className="hover:scale-[1.02] transition-transform duration-200 text-white"
                  >
                    {t('home.learn_more')}
                  </StarBorder>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 h-[500px] relative mt-8 lg:mt-0">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;