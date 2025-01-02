import { motion } from 'framer-motion';
import Card from '../common/Card';

const featuresList = [
  {
    title: 'AI-Powered Conversations',
    description: 'Leverage advanced artificial intelligence to automate and enhance your customer interactions.',
    icon: <i className="fas fa-robot text-primary text-2xl" />
  },
  {
    title: 'Smart Response System',
    description: 'Intelligent response suggestions and automated workflows for faster customer support.',
    icon: <i className="fas fa-comments text-primary text-2xl" />
  },
  {
    title: 'Performance Analytics',
    description: 'Comprehensive insights into customer interactions and communication effectiveness.',
    icon: <i className="fas fa-chart-line text-primary text-2xl" />
  },
  {
    title: 'Seamless Integration',
    description: 'Easy integration with your existing business tools and communication channels.',
    icon: <i className="fas fa-network-wired text-primary text-2xl" />
  },
  {
    title: 'Customizable Workflows',
    description: 'Create and optimize AI-powered workflows tailored to your business needs.',
    icon: <i className="fas fa-cogs text-primary text-2xl" />
  },
  {
    title: 'Enterprise Security',
    description: 'Secure and compliant communication platform for business-critical interactions.',
    icon: <i className="fas fa-shield-alt text-primary text-2xl" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Features for Enhanced Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empower your business with intelligent features designed to deliver efficient 
            and effective customer communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;