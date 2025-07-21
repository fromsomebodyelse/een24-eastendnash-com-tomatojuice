// Initial settings provided By NYStudio107 - https://nystudio107.com/docs/vite/

export default ({command}) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: './resources/js/main.js',
      }
    },
  },
  server: {
    fs: {
      strict: false
    },
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  }
});
