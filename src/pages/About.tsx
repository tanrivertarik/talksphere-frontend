import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Squares } from '../components/ui/squares-background';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen py-20 pt-32 bg-black">
      <Squares
        className="absolute inset-0 z-0 opacity-50"
        direction="diagonal"
        speed={0.5}
        borderColor="#333"
        squareSize={50}
        hoverFillColor="#444"
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            {t('about.team_section_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('about.team', { returnObjects: true }) as Array<{
              name: string;
              role: string;
              description: string;
              image: string;
              social: {
                linkedin?: string;
                github?: string;
              };
            }>).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-sm bg-black/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 p-6 group hover:-translate-y-2 text-center"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-primary font-medium mb-2 text-white/80 text-lg">{member.role}</p>
                <p className="text-gray-400 mb-4 mx-auto max-w-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;