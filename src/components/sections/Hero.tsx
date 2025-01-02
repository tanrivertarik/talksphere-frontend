import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Enhance Customer Experience with AI-Powered Communication
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            TalkSphere is a modern SaaS solution that empowers businesses to deliver efficient 
            and effective customer communication through artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">Get Started Free</Button>
            <Button variant="outline" size="lg">See How It Works</Button>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;