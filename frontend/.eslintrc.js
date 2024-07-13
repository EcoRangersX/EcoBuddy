// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["universe", "universe/native"],
  rules: {
    "import/order": "off",
    "react-native/no-inline-styles": "off",
    "import/namespace": "off",
    "no-duplicate-imports": "error",
  },
};
