import { motion } from 'framer-motion';
import Card from '../common/Card';
import { useTranslation } from '../../hooks/useTranslation';

const Features = () => {
  const { t, language } = useTranslation();

  return (
    <section id="features" className="pt-48 pb-48 bg-gradient-to-b from-background-alt to-background-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-bold text-text leading-tight">
              {t('features.title')}
            </h2>
            <p className="text-xl text-text-alt leading-relaxed">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-[55%] relative bg-white/90 rounded-[24px] overflow-hidden shadow-xl">
              <div className="aspect-[464/800] w-[98%] h-[98%] mx-auto my-[1%] rounded-[4px] overflow-hidden">
                <img 
                  src={language === 'en' ? "/assets/talksphere-en.gif" : "/assets/talksphere.gif"}
                  alt="TalkSphere Demo"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {(t('features.list', { returnObjects: true }) as Array<{
            title: string;
            description: string;
            icon: React.ReactNode;
          }>).map((feature, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1 
              }}
              className="group"
            >
              <Card className="h-full p-8 sm:p-10 bg-white hover:bg-background-alt transition-all duration-300 
                            border border-accent/5 hover:border-primary/10
                            shadow-sm hover:shadow-lg rounded-2xl">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl 
                              bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                                {feature.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-text-alt leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;