import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Squares } from '../components/ui/squares-background';
import { Card } from '../components/ui/card';

const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfmkHEnEzG4XkW_Lus3MpaCF_Pw9q8b4L8BDgRcRO5NEwxq6Q/formResponse';
      
      const formData = new FormData();
      formData.append('entry.896994238', email);

      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-32 pb-20 bg-[#060606] relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.4}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <Card className="w-full max-w-lg mx-auto bg-black/80 relative overflow-hidden">
          
          <div className="relative z-10 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                {t('contact.title')}
              </h1>
              <p className="text-lg text-stone-100 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-stone-300">
                  {t('contact.form.email.label')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-stone-800 text-stone-100 placeholder-stone-500
                    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                    transition-colors disabled:opacity-50"
                  placeholder={t('contact.form.email.placeholder')}
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
            </motion.form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact; 