module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/strongly-recommended", "@vue/airbnb"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    "vue/script-indent": ["error", 2, { baseIndent: 0 }],
    "vue/html-indent": ["error", 2, { baseIndent: 1 }],
    "import/no-extraneous-dependencies": "off",
  },
  ignorePatterns: ["static/**/*"],
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off",
        "vue/singleline-html-element-content-newline": [0],
        "vue/multiline-html-element-content-newline": [0],
        "no-plusplus": [0],
      },
    },
  ],
};
