module.exports = {
  purge: false,
  theme: {
    extend: {
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
        dark: { raw: "(prefers-color-scheme: dark)" }
      },
    },
    colors: {
      black: '#444444',
      white: '#FAFAFA',
    },
  },
  variants: {},
  plugins: [
    function darkModePlugin({ addBase, config }) {
      addBase({
        body: {
          color: config("theme.colors.black"),
          backgroundColor: config("theme.colors.white"),
        },
        "@screen dark": {
          body: {
            color: config("theme.colors.white"),
            backgroundColor: config("theme.colors.black"),
          },
        },
      });
    },
  ],
};
