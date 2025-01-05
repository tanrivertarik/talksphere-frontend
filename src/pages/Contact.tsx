import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TalkSphere hakkında daha fazla bilgi almak veya demo talep etmek için 
            formu doldurun, size en kısa sürede dönüş yapalım.
          </p>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact; 