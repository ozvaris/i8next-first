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
        arrayJoin: ["line1", "line2", "line3"],
        arrayJoinWithInterpolation: ["you", "can", "{{myVar}}"],
        arrayOfObjects: [{ name: "tom" }, { name: "steve" }],
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

val = i18next.t("arrayJoin", { joinArrays: "+" });
// -> "line1+line2+line3"
console.log(val);

val = i18next.t("arrayJoinWithInterpolation", {
  myVar: "interpolate",
  joinArrays: " ",
});
// -> "you can interpolate"
console.log(val);

val = i18next.t("arrayOfObjects.0.name");
// -> "tom"
console.log(val);
