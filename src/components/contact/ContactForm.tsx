import { useState } from 'react';
import Button from '../common/Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Email içeriğini oluştur
      const subject = encodeURIComponent(`TalkSphere İletişim: ${formData.subject}`);
      const body = encodeURIComponent(`
İsim: ${formData.name}
Email: ${formData.email}
Firma: ${formData.company}
Konu: ${formData.subject}

Mesaj:
${formData.message}
      `);

      // mailto linkini aç
      window.location.href = `mailto:info@talksphere.com?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (error) {
      console.error('Hata oluştu:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">İsim Soyisim</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Firma Adı</label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Konu</label>
        <select
          required
          value={formData.subject}
          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">Seçiniz</option>
          <option value="demo">Demo Talebi</option>
          <option value="pricing">Fiyatlandırma</option>
          <option value="integration">Entegrasyon</option>
          <option value="other">Diğer</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Mesaj</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'loading'}
          className="w-full md:w-auto"
        >
          {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
        </Button>
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md">
          Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
        </div>
      )}
    </form>
  );
};

export default ContactForm; 