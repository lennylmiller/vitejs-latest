/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const config = {
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
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  return defineConfig(config);
};
