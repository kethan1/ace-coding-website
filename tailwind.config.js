const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        "windows-mono": ["Consolas", ...defaultTheme.fontFamily.mono],
        "mac-mono": ["Menlo", ...defaultTheme.fontFamily.mono],
        "linux-mono": ["Ubuntu Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        teal: {
          1000: "#0e3937",
        },
      },
      content: {
        expand: "\"+\"",
        collapse: "\"-\"",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
