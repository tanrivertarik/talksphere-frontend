import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Ahmet Tarik TANRIVER',
        role: 'CEO & Kurucu Ortak',
        description: 'Yapay zeka destekli iş iletişiminde vizyonumuzu yönlendiriyor',
        image: '/assets/team/ceo.png',
        social: {
            linkedin: '#',
            github: '#'
        }
    },
    {
        name: 'Selim YUREKLI',
        role: 'CTO & Kurucu Ortak',
        description: 'Yapay zeka ve teknoloji altyapımızı tasarlıyor',
        image: '/assets/team/cto.jpg',
        social: {
            linkedin: '#',
            github: '#'
        }
    },
    {
        name: 'Berk ATCEKEN',
        role: 'CPO & Kurucu Ortak',
        description: 'Ürün stratejimizi ve kullanıcı deneyimimizi şekillendiriyor',
        image: '/assets/team/cpo.jpg',
        social: {
            linkedin: '#',
            github: '#'
        }
    }
];

const About = () => {
  return (
    <div className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            TalkSphere Hakkında
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yapay zeka destekli çözümlerle iş iletişimini devrim niteliğinde değiştiriyoruz, 
            modern SaaS platformumuz aracılığıyla müşteri etkileşimlerini daha verimli ve etkili hale getiriyoruz.
          </p>
        </motion.div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Liderlik Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      className="text-gray-400 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      className="text-gray-400 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;