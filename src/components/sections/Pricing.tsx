import { useState } from 'react';
import Button from '../common/Button';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 29, annual: 24 },
    features: [
      'Up to 5 team members',
      'Basic chat features',
      'Email support',
      '5GB storage',
      'Basic analytics'
    ]
  },
  {
    name: 'Professional',
    price: { monthly: 79, annual: 69 },
    features: [
      'Up to 20 team members',
      'Advanced chat features',
      'Priority support',
      '20GB storage',
      'Advanced analytics',
      'Custom integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: { monthly: 199, annual: 179 },
    features: [
      'Unlimited team members',
      'All features included',
      '24/7 priority support',
      'Unlimited storage',
      'Custom analytics',
      'API access',
      'Dedicated account manager'
    ]
  }
];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>

          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 ${!isAnnual ? 'text-primary' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAnnual ? 'bg-primary' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-primary' : 'text-gray-600'}`}>
              Annually (Save 20%)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg bg-white p-8 shadow-lg ${
                plan.popular ? 'border-2 border-primary' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-sm font-semibold text-white">
                  Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-gray-600">/mo</span>
                </div>
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="mt-6 w-full"
                >
                  Get Started
                </Button>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;