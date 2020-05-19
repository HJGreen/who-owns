module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },

  variants: {},
  plugins: [],
};
