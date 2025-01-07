import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Load translations via HTTP
  // .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind with React
  .init({
    fallbackLng: 'en', // Default language if none is detected
    supportedLngs: ['en', 'nl', 'fr', 'de'], // Supported languages
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to load translations
    },
    // detection: {
    //   order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
    //   caches: ['cookie', 'localStorage'], // Where to cache the detected language
    // },
  });

export default i18n;
