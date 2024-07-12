export default {
  content: [
    "./resources/js/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
