import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ko from './locales/ko.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      },
    },
    fallbackLng: 'ko',
    debug: true,
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'], // 경로를 먼저 감지하고, 그 다음 로컬 스토리지, 마지막으로 브라우저 언어 설정
      lookupFromPathIndex: 0, // /en과 같이 첫 번째 경로 세그먼트에서 언어를 찾습니다.
      checkWhitelist: true, // 리소스에 정의된 언어만 허용합니다.
    },
  });

export default i18n; 