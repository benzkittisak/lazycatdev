import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Langueages 
import translationTH from './assets/locales/th/lang.json'
import translationEN from './assets/locales/en/lang.json'

// const fallbackLng = ['th'];
// const availableLanguages = ['en', 'th'];
// const locizeOptions = {
//     projectId: 'c741f2bd-d02b-4cb4-a8bb-ceab0f3e8d68',
//     apiKey: 'a03af43f-9c5e-47eb-aa84-e44d13d4ccf3', // The API key should only be used in development, not in production. You should not expose your apps API key to production!!!
//     referenceLng: 'th',
//   };

const resources = {
    th:{
        translation: translationTH,
    },
    en:{
        translation: translationEN
    }
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        debug: false,
        fallbackLng:'th',
        interpolation:{
            escapeValue: false, // not needed for react as it escapes by default
        },
        
    });

export default i18n