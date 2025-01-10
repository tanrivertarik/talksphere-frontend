import React from 'react';

const KVKK: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl pt-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Kişisel Verilerin Korunması ve İşlenmesi Politikası
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Amaç ve Kapsam</h2>
          <p className="text-gray-600 mb-4">
            Bu Kişisel Verilerin Korunması ve İşlenmesi Politikası ("Politika"), şirketimizin kişisel verilerin korunmasına ilişkin yaklaşımını ve ilkelerini açıklamak amacıyla hazırlanmıştır. Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket eden şirketimizin kişisel verilerin işlenmesindeki prensiplerini belirlemektedir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Toplanan Kişisel Veriler</h2>
          <p className="text-gray-600 mb-4">
            İletişim formumuz aracılığıyla aşağıdaki kişisel verileriniz toplanmaktadır:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Ad ve Soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>İletişim mesajı içeriği</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
          <p className="text-gray-600 mb-4">
            Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Sizinle iletişime geçebilmek ve taleplerinizi yanıtlayabilmek</li>
            <li>Hizmetlerimiz hakkında bilgi sağlamak</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            <li>Hizmet kalitemizi artırmak</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Kişisel Verilerin Saklanması ve Güvenliği</h2>
          <p className="text-gray-600 mb-4">
            Kişisel verileriniz, Google Forms altyapısı kullanılarak toplanmakta ve saklanmaktadır. Verilerinizin güvenliği için gerekli teknik ve idari tedbirler alınmaktadır. Google'ın veri güvenliği politikaları ve KVKK uyumluluğu hakkında detaylı bilgi için Google'ın gizlilik politikasını inceleyebilirsiniz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Kişisel Veri Sahibinin Hakları</h2>
          <p className="text-gray-600 mb-4">
            KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Kişisel verilerinizin düzeltilmesini veya silinmesini talep etme</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. İletişim</h2>
          <p className="text-gray-600 mb-4">
            KVKK kapsamındaki haklarınızı kullanmak için veya politikamız hakkında sorularınız için bizimle iletişim formumuz üzerinden veya [E-POSTA ADRESİ] adresinden iletişime geçebilirsiniz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Politika Güncellemeleri</h2>
          <p className="text-gray-600">
            Bu politika, yasal düzenlemeler ve şirket uygulamalarındaki değişiklikler doğrultusunda güncellenebilir. Önemli değişiklikler olması durumunda web sitemiz üzerinden bilgilendirme yapılacaktır.
          </p>
        </section>
      </div>
    </div>
  );
};

export default KVKK; 