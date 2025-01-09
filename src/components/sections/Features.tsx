import { motion } from 'framer-motion';
import Card from '../common/Card';

const featuresList = [
  {
    title: 'API Entegrasyonlu Zeka',
    description: 'Herhangi bir veri kaynağına veya üçüncü parti servise entegre olarak canlı, güncel verileri anlık olarak işleyebilen yapay zeka chatbotları sunuyoruz. İşletmenizin, stok durumu ve şirket içi veritabanı gibi pek çok farklı kaynaktan gelen gerçek zamanlı bilgiler ile iletişim kurabilir.',
    icon: <i className="fas fa-robot text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  },
  {
    title: 'Sürekli Öğrenen Dinamik Yapı',
    description: 'Chatbotlar, veri akışı kesintisiz bir şekilde sağlanabildiği sürece kendini sürekli günceller ve yeni bilgiler ekledikçe yanıtlarını zenginleştirir. Bu sayede, her etkileşim bir önceki adımdan daha akıllı hale gelir.',
    icon: <i className="fas fa-sync text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  },
  {
    title: 'Kolay Uyum ve Hızlı Kurulum',
    description: 'Tek yapmanız gereken mevcut API\'lerinizi veya web servislerinizi TalkSphere platformuna bağlamak. Kapsamlı dokümantasyonumuz ve basit yapılandırma adımlarımız sayesinde birkaç tıklama ile entegrasyon sürecini tamamlayabilirsiniz.',
    icon: <i className="fas fa-bolt text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  },
  {
    title: 'Akıllı Öğrenme Sistemi',
    description: 'Dokümanlarınız ve veritabanlarınızdan sürekli öğrenerek her yanıtı biraz daha zekice sunan yapay zeka altyapısı.',
    icon: <i className="fas fa-brain text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  },
  {
    title: 'Güçlü Entegrasyon',
    description: 'Tek satır kod ile kolay kurulum, tüm web teknolojilerine uyumlu platform ve kesintisiz entegrasyon imkânı.',
    icon: <i className="fas fa-plug text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  },
  {
    title: 'İlgili Duyusal Çoğaltma (RAG)',
    description: 'Bilgi geri çağırma ve oluşturma yeteneklerini birleştirerek iç ve dış kaynaklardan anlamlı veriler elde edin.',
    icon: <i className="fas fa-network-wired text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  },
  {
    title: 'Güvenli Veri Yönetimi',
    description: 'Uçtan uca şifreleme ve KVKK uyumlu sistemler ile kritik verilerinizi yüksek hız ve güvenlik altında saklayın.',
    icon: <i className="fas fa-shield-alt text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  },
  {
    title: 'Çoklu Model Desteği',
    description: 'GPT, Google Gemini Pro, Azure ve Anthropic gibi gelişmiş yapay zeka modellerini tek platformda birleştirin.',
    icon: <i className="fas fa-microchip text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  },
  {
    title: 'Gerçek Zamanlı Analitik',
    description: 'Yapay zeka performansını anlık olarak takip edin, optimizasyon için değerli içgörüler elde edin.',
    icon: <i className="fas fa-chart-line text-3xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
  }
];

const Features = () => {
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
              Gelişmiş İletişim için Yapay Zeka Destekli Özellikler
            </h2>
            <p className="text-xl text-text-alt leading-relaxed">
              Müşterilerinizle kurduğunuz her temas noktasını daha akıllı, daha hızlı ve daha kişisel hale getirin.
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
                  src="/assets/talksphere.gif" 
                  alt="TalkSphere Demo"
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.title}
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