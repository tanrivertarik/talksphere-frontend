import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { useState } from 'react';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Demo Talebi', // Default subject
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe9VSSD29FnXJ6VEWU0IaIpd8ilhvbXE_6KfK_Rq1lSQmm1tw/formResponse';
      
      // Create form data
      const googleFormData = new FormData();
      googleFormData.append('entry.1234567890', formData.name); // Replace with your actual form entry IDs
      googleFormData.append('entry.0987654321', formData.email);
      googleFormData.append('entry.1111111111', formData.company);
      googleFormData.append('entry.2222222222', formData.subject);
      googleFormData.append('entry.3333333333', formData.message);

      // Submit using no-cors mode to bypass CORS restrictions
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });

      // Since no-cors mode doesn't return readable response, we assume success if no error
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: 'Demo Talebi',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-stone-300">
              {t('contact.form.name.label')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-stone-800 text-stone-100 placeholder-stone-500
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                transition-colors disabled:opacity-50"
              placeholder={t('contact.form.name.placeholder')}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-stone-300">
              {t('contact.form.email.label')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-stone-800 text-stone-100 placeholder-stone-500
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                transition-colors disabled:opacity-50"
              placeholder={t('contact.form.email.placeholder')}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium text-stone-300">
            {t('contact.form.company.label')}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-stone-800 text-stone-100 placeholder-stone-500
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
              transition-colors disabled:opacity-50"
            placeholder={t('contact.form.company.placeholder')}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-stone-300">
            Konu
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-stone-800 text-stone-100
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
              transition-colors disabled:opacity-50"
          >
            <option value="Demo Talebi">Demo Talebi</option>
            <option value="Fiyatlandırma">Fiyatlandırma</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-stone-300">
            {t('contact.form.message.label')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-stone-800 text-stone-100 placeholder-stone-500
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
              transition-colors resize-none disabled:opacity-50"
            placeholder={t('contact.form.message.placeholder')}
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 rounded-lg bg-green-500/10 text-green-400">
            {t('contact.form.success')}
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-500/10 text-red-400">
            {t('contact.form.error')}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-black
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t('common.loading') : t('contact.form.submit')}
          </button>
        </div>
      </form>

      <div className="text-sm text-stone-400 mt-4">
        <p>
          {t('contact.form.privacy_notice.prefix')}{' '}
          <Link to="/kvkk" className="text-primary hover:text-primary/80 hover:underline transition-colors">
            {t('contact.form.privacy_notice.link')}
          </Link>
          {' '}{t('contact.form.privacy_notice.suffix')}
        </p>
      </div>
    </div>
  );
};

export default ContactForm; 