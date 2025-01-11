import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const UseCases: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">{t('useCases.title')}</h2>
          <p className="text-xl text-text-alt">
            {t('useCases.subtitle')}
          </p>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            {t('useCases.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              <Card className="h-full p-6 bg-white hover:bg-primary/5 transition-all duration-300 
                            border border-accent/5 hover:border-primary/10">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl 
                              bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    {useCase.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-text-alt text-sm">{useCase.description}</p>
                  </div>
                </div>
              </Card>
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
          <h3 className="text-2xl font-semibold text-text mb-8">
            {t('useCases.cta_title')}
          </h3>
          <Link to="/contact">
            <Button 
              variant="primary"
              size="lg"
              className="bg-primary hover:bg-primary-alt text-white font-semibold px-12 py-4 rounded-lg
                        transform transition-all duration-200 hover:scale-[1.02] shadow-lg
                        hover:shadow-primary/20 min-w-[240px]"
            >
              {t('useCases.cta_button')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases; 