module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
  ],
  // add your custom rules here
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    }],
    // for nuxt pages:
    "vue/multi-word-component-names": "off",
  },
};
