import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBuilding, faShieldAlt, faCheck, faRobot } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/common/Card';

const solutionsList = [
  {
    title: 'AI-Powered Communication',
    description: 'Enhance your customer interactions with advanced artificial intelligence and natural language processing.',
    icon: <FontAwesomeIcon icon={faRobot} className="text-primary text-2xl" />,
    features: [
      'Smart conversation routing',
      'Natural language understanding',
      'Automated responses',
      'Context-aware interactions'
    ]
  },
  {
    title: 'Customer Experience Analytics',
    description: 'Gain deep insights into customer interactions and optimize communication strategies.',
    icon: <FontAwesomeIcon icon={faChartBar} className="text-primary text-2xl" />,
    features: [
      'Conversation analytics',
      'Customer sentiment analysis',
      'Performance metrics',
      'Behavioral insights'
    ]
  },
  {
    title: 'Business Integration',
    description: 'Seamlessly integrate AI-powered communication into your existing business workflow.',
    icon: <FontAwesomeIcon icon={faBuilding} className="text-primary text-2xl" />,
    features: [
      'CRM integration',
      'API connectivity',
      'Custom workflows',
      'Multi-platform support'
    ]
  },
  {
    title: 'Enterprise Security',
    description: 'Ensure secure and compliant communication with enterprise-grade protection.',
    icon: <FontAwesomeIcon icon={faShieldAlt} className="text-primary text-2xl" />,
    features: [
      'End-to-end encryption',
      'Data privacy controls',
      'Compliance management',
      'Access control'
    ]
  }
];

const Solutions = () => {
  return (
    <div className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Solutions for Modern Business Communication
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how TalkSphere's AI-powered platform can transform your customer communication 
            and deliver more efficient, effective interactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsList.map((solution, index) => (
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