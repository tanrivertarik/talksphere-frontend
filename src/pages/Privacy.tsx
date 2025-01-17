import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';
import { Squares } from '../components/ui/squares-background';

const Privacy = () => {
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
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            {t('privacy.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('privacy.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(t('privacy.sections', { returnObjects: true }) as Array<{
            title: string;
            content: string;
          }>).map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-sm bg-black/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                <p className="text-gray-400 whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mt-4 text-gray-400">
            {t('privacy.footer.contact_text')}{' '}
            <Link to="/contact" className="text-primary hover:text-primary-light hover:underline transition-colors duration-300">
              {t('privacy.footer.contact_link')}
            </Link>
            {' '}{t('privacy.footer.contact_suffix')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy; 