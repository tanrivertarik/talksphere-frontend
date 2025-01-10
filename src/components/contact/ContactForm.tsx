import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <div className="space-y-6">
      <div className="w-full h-[800px]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe9VSSD29FnXJ6VEWU0IaIpd8ilhvbXE_6KfK_Rq1lSQmm1tw/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Yükleniyor…
        </iframe>
      </div>
      <div className="text-sm text-gray-600 mt-4">
        <p>
          Bu formu doldurarak{' '}
          <Link to="/kvkk" className="text-blue-600 hover:underline">
            Kişisel Verilerin Korunması Politikamızı
          </Link>
          {' '}kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  );
};

export default ContactForm; 