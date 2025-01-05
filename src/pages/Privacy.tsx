import { motion } from 'framer-motion';
import Card from '../components/common/Card';

const Privacy = () => {
  const privacyContent = [
    {
      title: 'Veri Toplama ve Kullanım',
      content: `TalkSphere olarak, müşterilerimizin gizliliğini korumayı taahhüt ediyoruz. Hizmetlerimizi 
      sağlamak için topladığımız veriler şunları içerir:
      • Temel kullanıcı bilgileri (isim, e-posta)
      • Etkileşim verileri ve sohbet kayıtları
      • Sistem performans metrikleri
      • Kullanım istatistikleri`
    },
    {
      title: 'Yapay Zeka ve Veri İşleme',
      content: `RAG (İlgili Duyusal Çoğaltma) teknolojimiz ve yapay zeka modellerimiz:
      • KVKK uyumlu veri işleme süreçleri
      • Uçtan uca şifreleme ile güvenli veri transferi
      • Yüksek hızlı vektör veritabanlarında güvenli depolama
      • Kişisel verilerin anonimleştirilmesi`
    },
    {
      title: 'Veri Güvenliği',
      content: `Verilerinizin güvenliği bizim için önceliktir:
      • ISO 27001 standartlarına uygun altyapı
      • Düzenli güvenlik denetimleri
      • Gelişmiş şifreleme protokolleri
      • Güvenli veri merkezi operasyonları`
    },
    {
      title: 'Kullanıcı Hakları',
      content: `KVKK kapsamında haklarınız:
      • Verilerinize erişim hakkı
      • Düzeltme ve silme talep etme hakkı
      • İşleme sınırlandırma hakkı
      • Veri taşınabilirliği hakkı
      • İtiraz etme hakkı`
    }
  ];

  return (
    <div className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TalkSphere olarak kişisel verilerinizin güvenliğini ve gizliliğini önemsiyoruz. 
            Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privacyContent.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card title={section.title}>
                <p className="text-gray-600 whitespace-pre-line">
                  {section.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
          </p>
          <p className="mt-4 text-gray-600">
            Sorularınız için <a href="/contact" className="text-primary hover:underline">iletişim</a> sayfamızdan 
            bize ulaşabilirsiniz.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy; 