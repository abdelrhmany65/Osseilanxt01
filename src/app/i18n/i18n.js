'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// استيراد ملفات الترجمة
import translationAR from '../locales/ar/common.json';
import translationEN from '../locales/en/common.json';

// كائن الموارد (resources)
const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development', // تفعيل التصحيح أثناء التطوير
    resources,
    lng: 'ar',      // اللغة الافتراضية
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false, // لتعطيل خاصية الهروب في النصوص (ضرورية مع React)
    },
    react: {
      useSuspense: false, // لمنع انتظار الموارد عند التحميل
    },
  });

// ضبط اتجاه الصفحة بناءً على اللغة
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
  if (lng === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
});

export default i18n;
