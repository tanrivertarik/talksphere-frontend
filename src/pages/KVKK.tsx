import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Squares } from '../components/ui/squares-background';

const KVKK: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen py-20 pt-32 bg-black">
      <Squares
        className="absolute inset-0 z-0 opacity-50"
        direction="diagonal"
        speed={0.5}
        borderColor="#333"
        squareSize={50}
        hoverFillColor="#444"
      />
      
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            {t('kvkk.title')}
          </h1>
        </motion.div>

        <div className="space-y-8">
          {(t('kvkk.sections', { returnObjects: true }) as Array<{
            title: string;
            content: string;
          }>).map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-sm bg-black/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300 p-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {section.title}
              </h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-400 whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KVKK; 