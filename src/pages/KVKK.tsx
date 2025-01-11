import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const KVKK: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl pt-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {t('kvkk.title')}
      </h1>

      <div className="prose prose-lg max-w-none">
        {(t('kvkk.sections', { returnObjects: true }) as Array<{
          title: string;
          content: string;
        }>).map((section) => (
          <section key={section.title} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 mb-4 whitespace-pre-line">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default KVKK; 