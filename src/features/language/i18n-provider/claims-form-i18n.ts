import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const claimsForm18n = (lang: string): any => {
  if (i18n.language !== lang) {
    i18n
      .use(XHR)
      .use(initReactI18next)
      .init({
        fallbackLng: false,
        backend: {
          loadPath: `/locales/${lang}.json`
        },
        debug: false,
        load: "languageOnly",
        returnEmptyString: false,
        interpolation: {
          escapeValue: false
        }
      });
    i18n.changeLanguage(lang);
  }
  return i18n;
};

export default claimsForm18n;
