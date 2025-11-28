// src/init.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// JSON fayllar
import en from "./En.json";
import ru from "./Ru.json";
import uz from "./Uz.json";


i18n
    .use(LanguageDetector)        // brauzer tilini aniqlaydi
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
            uz: { translation: uz }
        },

        fallbackLng: "en",          // agar til topilmasa — inglizcha ishlaydi
        debug: false,               // ishlab chiqishda true qilishingiz mumkin

        interpolation: {
            escapeValue: false        // React uchun shunaqa bo'lishi kerak
        },

        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"] // tanlangan tilni localStorage-ga yozadi
        }
    });

export default i18n;