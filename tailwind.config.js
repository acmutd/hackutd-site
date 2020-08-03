module.exports = {
  // TODO: Figure out why marking this true causes error in build.
  // https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  purge: false,
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' }
      },
      colors: {
        black: '#444444',
        white: '#FAFAFA',
        primary: '#FFC386',
        surface: '#292F36',
        orange: '#FFC386',
      },
    },
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      sans: ['Roboto', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [
    function darkModePlugin({ addBase, config }) {
      addBase({
        body: {
          color: config('theme.colors.black'),
          backgroundColor: config('theme.colors.white'),
        },
        '@screen dark': {
          body: {
            color: config('theme.colors.white'),
            backgroundColor: config('theme.colors.black'),
          },
        },
      });
    },
  ],
};
