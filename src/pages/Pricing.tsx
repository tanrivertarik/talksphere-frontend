import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const pricingPlans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small businesses',
    features: [
      'Up to 5 team members',
      'Basic chat support',
      'Standard analytics',
      '1GB storage',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '99',
    description: 'Ideal for growing companies',
    features: [
      'Up to 20 team members',
      'Advanced chat features',
      'Advanced analytics',
      '10GB storage',
      'Priority support',
      'Custom integrations'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: '299',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'All features included',
      'Custom analytics',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom development',
      'SLA guarantee'
    ]
  }
];

const Pricing = () => {
  return (
    <div className="py-20 pt-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.recommended ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <FontAwesomeIcon 
                        icon={faCheck} 
                        className="text-primary text-sm mr-2" 
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold ${
                    plan.recommended
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
