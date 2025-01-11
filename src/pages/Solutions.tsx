import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/common/Card';
import { useTranslation } from '../hooks/useTranslation';

const Solutions = () => {
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
            {t('solutions.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(t('solutions.list', { returnObjects: true }) as Array<{
            title: string;
            description: string;
            icon: React.ReactNode;
            features: string[];
          }>).map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center mb-6">
                  {solution.icon}
                  <h3 className="text-2xl font-semibold ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <FontAwesomeIcon icon={faCheck} className="text-primary text-sm mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;