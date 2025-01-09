import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faHospital, 
  faBuildingUser, 
  faBullhorn, 
  faPlane, 
  faTruck 
} from '@fortawesome/free-solid-svg-icons';

const UseCases: React.FC = () => {
  const useCases = [
    {
      title: 'E-Ticaret & Müşteri Hizmetleri',
      description: 'Hızlı ve kişisel destek sunan, satış dönüşümünü artıran ve 24/7 chatbot desteği ile müşteri memnuniyetini yükselten çözümler. Çağrı merkezi yükünü %40 azaltırken yanıt sürelerini kısaltır.',
      icon: <FontAwesomeIcon icon={faShoppingCart} className="text-4xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
    },
    {
      title: 'Sağlık & Danışmanlık',
      description: 'Hızlı randevu ve bilgi paylaşımı, iş yükünü hafifletme ve kişiselleştirilmiş tavsiyeler sunan sistem. Randevu isteklerinin %60\'ını otomatik yanıtlayarak uzman verimliliğini artırır.',
      icon: <FontAwesomeIcon icon={faHospital} className="text-4xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
    },
    {
      title: 'İç Operasyonlar & Destek',
      description: 'Şirket içi iletişimi verimli hale getiren, bilgiye anında erişim sağlayan ve operasyonel süreçleri otomatikleştiren çözümler. BT destek ekibinin iş yükünü önemli ölçüde azaltır.',
      icon: <FontAwesomeIcon icon={faBuildingUser} className="text-4xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
    },
    {
      title: 'Pazarlama & Sosyal Medya',
      description: 'Kişiselleştirilmiş kampanyalar ve sosyal medya müşteri desteği sunan yapay zeka çözümleri. Marka etkileşimini ve dönüşüm oranlarını yükselterek pazarlama performansını artırır.',
      icon: <FontAwesomeIcon icon={faBullhorn} className="text-4xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
    },
    {
      title: 'Seyahat & Otelcilik',
      description: 'Anlık rezervasyon, kişiselleştirilmiş öneriler ve rezervasyon yükünü hafifleten çözümler. Yoğun sezonda bile yüzlerce müşteriye aynı anda hizmet vererek operasyonel verimliliği artırır.',
      icon: <FontAwesomeIcon icon={faPlane} className="text-4xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
    },
    {
      title: 'Lojistik & Tedarik Zinciri',
      description: 'Gerçek zamanlı veri toplama, akıllı ajanlar ve talep tahmini özellikleriyle tedarik zinciri verimliliğini artıran çözümler. Teslimat sürelerini kısaltır ve müşteri memnuniyetini yükseltir.',
      icon: <FontAwesomeIcon icon={faTruck} className="text-4xl text-primary group-hover:text-primary-alt transition-colors duration-300" />
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">Kullanım Senaryoları</h2>
          <p className="text-xl text-text-alt">
            Yapay Zekayı İş Süreçlerinize Nasıl Entegre Edebilirsiniz?
          </p>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Sağlık, e-ticaret, finans, müşteri hizmetleri ve daha birçok sektörde TalkSphere'in yapay zeka çözümlerini kullanarak nasıl dönüşüm yaratabileceğinizi keşfedin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {useCases.map((useCase, index) => (
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
            >
              <Card className="h-full p-6 bg-white hover:bg-primary/5 transition-all duration-300 
                            border border-accent/5 hover:border-primary/10">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl 
                              bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    {useCase.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-text-alt text-sm">{useCase.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.4 
          }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-text mb-8">
            Kendi İşletmenizde Nasıl Uygularsınız?
          </h3>
          <Link to="/contact">
            <Button 
              variant="primary"
              size="lg"
              className="bg-primary hover:bg-primary-alt text-white font-semibold px-12 py-4 rounded-lg
                        transform transition-all duration-200 hover:scale-[1.02] shadow-lg
                        hover:shadow-primary/20 min-w-[240px]"
            >
              Bize Ulaşın
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases; 