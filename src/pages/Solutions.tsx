import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBuilding, faShieldAlt, faCheck, faRobot } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/common/Card';

const solutionsList = [
  {
    title: 'Sektörel Çözümler',
    description: 'Her sektöre özel yapay zeka destekli çözümlerle iş süreçlerinizi optimize edin.',
    icon: <FontAwesomeIcon icon={faBuilding} className="text-primary text-2xl" />,
    features: [
      'Sağlık: Hasta etkileşimleri ve teşhis desteği',
      'Eğitim: Kişiselleştirilmiş öğretim sistemleri',
      'E-ticaret: Ürün önerileri ve müşteri desteği',
      'Hukuk: Sözleşme analizi ve dava desteği'
    ]
  },
  {
    title: 'Yapay Zeka Modelleri',
    description: 'En gelişmiş yapay zeka modellerini tek platformda birleştiren güçlü altyapı.',
    icon: <FontAwesomeIcon icon={faRobot} className="text-primary text-2xl" />,
    features: [
      'GPT Modelleri ile gelişmiş dil işleme',
      'Google Gemini Pro entegrasyonu',
      'Azure & Anthropic desteği',
      'Açık kaynak model esnekliği'
    ]
  },
  {
    title: 'Veri Yönetimi ve Güvenlik',
    description: 'KVKK uyumlu, uçtan uca şifreli ve güvenli veri yönetim sistemi.',
    icon: <FontAwesomeIcon icon={faShieldAlt} className="text-primary text-2xl" />,
    features: [
      'Uçtan uca veri şifreleme',
      'KVKK uyumlu sistemler',
      'Yüksek hızlı vektör veritabanları',
      'Güvenli veri erişim kontrolü'
    ]
  },
  {
    title: 'İş Verimliliği ve Analitik',
    description: 'Gerçek zamanlı analitik ve optimizasyon araçlarıyla iş süreçlerinizi geliştirin.',
    icon: <FontAwesomeIcon icon={faChartBar} className="text-primary text-2xl" />,
    features: [
      'Maliyet tasarrufu optimizasyonları',
      'Gerçek zamanlı performans takibi',
      'Müşteri davranış analitiği',
      'Otomatik raporlama sistemleri'
    ]
  }
];

const Solutions = () => {
  return (
    <div className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Modern İş İletişimi için Kapsamlı Yapay Zeka Çözümleri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TalkSphere'in yapay zeka destekli platformunun müşteri iletişiminizi nasıl dönüştürebileceğini 
            ve daha verimli, etkili etkileşimler sağlayabileceğini keşfedin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsList.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center mb-6">
                  {solution.icon}
                  <h3 className="text-2xl font-semibold ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <FontAwesomeIcon icon={faCheck} className="text-primary text-sm mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;