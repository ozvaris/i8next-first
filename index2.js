import "./env.js";
import i18next from "i18next";
import { Low, JSONFile } from "lowdb";

Low.data = {
  en: {
    translation: {
      key: "hello world {{value}}",
      key1: 1,
    },
  },
  tr: {
    translation: {
      key: "Merhaba Dünya world {{value}}",
      key1: 1,
    },
  },
};

const currentLanguage = "tr";

i18next.init({
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: ["tr", "en"],
  debug: true,
  resources: Low.data,
  interpolation: {
    skipOnVariables: false,
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

// previous language is not retained
console.log(i18next.languages);
console.log(i18next.t("key", { value: "$t(key1)" }));
i18next.changeLanguage(currentLanguage);
console.log(i18next.t("key", { value: "$t(key1)" }));
