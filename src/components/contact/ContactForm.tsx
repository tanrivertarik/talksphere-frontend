import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const ContactForm = () => {
  const { t, language } = useTranslation();

  const formUrls = {
    tr: "https://docs.google.com/forms/d/e/1FAIpQLSe9VSSD29FnXJ6VEWU0IaIpd8ilhvbXE_6KfK_Rq1lSQmm1tw/viewform?embedded=true",
    en: "https://docs.google.com/forms/d/e/1FAIpQLSddIqC_JCia6eez_rXEevyPrk32op1i1TNYB2csZ8XrY6iuQg/viewform?usp=header"
  };

  return (
    <div className="space-y-6">
      <div className="w-full h-[800px]">
        <iframe
          src={formUrls[language]}
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          {t('common.loading')}
        </iframe>
      </div>
      <div className="text-sm text-gray-600 mt-4">
        <p>
          {t('contact.form.privacy_notice.prefix')}{' '}
          <Link to="/kvkk" className="text-blue-600 hover:underline">
            {t('contact.form.privacy_notice.link')}
          </Link>
          {' '}{t('contact.form.privacy_notice.suffix')}
        </p>
      </div>
    </div>
  );
};

export default ContactForm; 