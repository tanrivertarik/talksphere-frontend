import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKeys = NestedKeyOf<typeof translations.tr>;

export const useTranslation = () => {
  const { language, setLanguage } = useLanguage();

  const t = <T = string>(key: TranslationKeys, options?: { returnObjects: boolean }): T | string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
      if (value === undefined) return key;
    }
    
    if (options?.returnObjects) return value as T;
    return String(value);
  };

  return { t, language, setLanguage };
}; 