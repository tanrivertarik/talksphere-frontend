import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { Squares } from '../ui/squares-background';
import { StarBorder } from '../ui/star-border';
import { GlowingStarsBackgroundCard, GlowingStarsTitle, GlowingStarsDescription } from '../ui/glowing-background-stars-card';

const UseCases: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-[#060606] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="up"
          speed={0.3}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">{t('useCases.title')}</h2>
          <p className="text-xl text-gray-300 mb-4">
            {t('useCases.subtitle')}
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t('useCases.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {(t('useCases.list', { returnObjects: true }) as Array<{
            title: string;
            description: string;
            icon: React.ReactNode;
          }>).map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: index * 0.1 
              }}
            >
              <GlowingStarsBackgroundCard className="h-full">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg 
                                bg-primary/5">
                      {useCase.icon}
                    </div>
                    <GlowingStarsTitle>
                      {useCase.title}
                    </GlowingStarsTitle>
                  </div>
                  <GlowingStarsDescription>
                    {useCase.description}
                  </GlowingStarsDescription>
                </div>
              </GlowingStarsBackgroundCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.4 
          }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            {t('useCases.cta_title')}
          </h3>
          <Link to="/contact">
            <StarBorder 
              as="div"
              color="#fff"
              speed="4s"
              className="hover:scale-[1.02] transition-transform duration-200 text-white inline-flex px-8 py-4"
            >
              {t('useCases.cta_button')}
            </StarBorder>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases; 