import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';

const Cookies = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('cookies.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('cookies.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(t('cookies.sections', { returnObjects: true }) as Array<{
            title: string;
            content: string;
          }>).map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card title={section.title}>
                <p className="text-gray-600 whitespace-pre-line">
                  {section.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mt-4 text-gray-600">
            {t('cookies.footer.contact_text')}{' '}
            <Link to="/contact" className="text-primary hover:underline">
              {t('cookies.footer.contact_link')}
            </Link>
            {' '}{t('cookies.footer.contact_suffix')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies; 