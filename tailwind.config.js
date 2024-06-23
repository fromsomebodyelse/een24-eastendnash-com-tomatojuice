export default {
  content: [
    "./resources/js/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
