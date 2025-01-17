import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../hooks/useTranslation';
import { Squares } from '../components/ui/squares-background';

const Solutions = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-[#060606] py-20 pt-32">
      <div className="absolute inset-0">
        <Squares 
          direction="right"
          speed={0.4}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {t('solutions.title')}
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
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
              <div className="h-full bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors shadow-lg">
                <div className="flex items-center mb-6">
                  {solution.icon}
                  <h3 className="text-2xl font-semibold ml-4 text-white">{solution.title}</h3>
                </div>
                <p className="text-neutral-400 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-300">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-sm mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;