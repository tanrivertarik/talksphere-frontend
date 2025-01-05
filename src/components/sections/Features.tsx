import { motion } from 'framer-motion';
import Card from '../common/Card';

const featuresList = [
  {
    title: 'Akıllı Öğrenme Sistemi',
    description: 'Dokümanlarınız ve veritabanlarınızdan sürekli öğrenen, bağlama duyarlı yanıtlar üreten gelişmiş yapay zeka.',
    icon: <i className="fas fa-brain text-primary text-2xl" />
  },
  {
    title: 'Güçlü Entegrasyon',
    description: 'Tek satır kod ile kurulum, tüm web teknolojileriyle uyumlu platform bağımsız entegrasyon.',
    icon: <i className="fas fa-plug text-primary text-2xl" />
  },
  {
    title: 'İlgili Duyusal Çoğaltma (RAG)',
    description: 'Bilgi geri çağırma ve üretim yeteneklerini birleştiren, iç ve dış kaynaklardan etkili veri erişimi.',
    icon: <i className="fas fa-network-wired text-primary text-2xl" />
  },
  {
    title: 'Güvenli Veri Yönetimi',
    description: 'Uçtan uca şifreleme, KVKK uyumlu sistemler ve yüksek hızlı vektör veritabanları ile güvenli altyapı.',
    icon: <i className="fas fa-shield-alt text-primary text-2xl" />
  },
  {
    title: 'Çoklu Model Desteği',
    description: 'GPT, Google Gemini Pro, Azure ve Anthropic gibi gelişmiş yapay zeka modellerini tek platformda birleştiren sistem.',
    icon: <i className="fas fa-microchip text-primary text-2xl" />
  },
  {
    title: 'Gerçek Zamanlı Analitik',
    description: 'Yapay zeka performansını anlık olarak takip eden ve optimize eden gelişmiş izleme araçları.',
    icon: <i className="fas fa-chart-line text-primary text-2xl" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Gelişmiş İletişim için Yapay Zeka Destekli Özellikler
            </h2>
            <p className="text-xl text-gray-600">
              İşletmenizi verimli ve etkili müşteri iletişimi sağlamak için tasarlanmış 
              akıllı özelliklerle güçlendirin.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="w-[55%] relative bg-white/80 rounded-[24px] overflow-hidden shadow-lg">
              <div className="aspect-[464/800] w-[98%] h-[98%] mx-auto my-[1%] rounded-[4px] overflow-hidden">
                <img 
                  src="/assets/talksphere.gif" 
                  alt="TalkSphere Demo"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>
          </motion.div>
        </div>

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