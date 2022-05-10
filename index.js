import "./env.js";
import i18next from "i18next";

i18next.init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        key: "hello world {{value}}",
        key1: 1,
        tree: {
          res: "added {{something}}",
        },
        array: ["a", "b", "c"],
      },
    },
  },
  interpolation: {
    skipOnVariables: false,
  },
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
//document.getElementById("output").innerHTML = i18next.t("key");
console.log(i18next.t("key", { value: "$t(key1)" }));

let val = i18next.t("tree", { returnObjects: true, something: "gold" });
console.log(val);
// -> { res: 'added gold' }
val.key = "abc";
console.log(val);

val = i18next.t("array", { returnObjects: true });
console.log(val);
// -> ['a', 'b', 'c']
val.push("1");
console.log(val);
