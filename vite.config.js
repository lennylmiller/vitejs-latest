import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    minify: true,
  },
  build: {
    lib: {
      entry: './src/index.js',
      name: 'web-components',
      fileName: (format) => `web-components.${format}.js`,
    },
  },
  plugins: [],
});
