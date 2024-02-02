/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const config = {
    // esbuild: {
    //   minify: true,
    // },
    // build: {
    //   lib: {
    //     entry: './src/index.js',
    //     name: 'web-components',
    //     fileName: (format) => `web-components.${format}.js`,
    //   },
    // },
    plugins: [],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000/',//process.env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        // configure: (proxy, _options) => {
        //   proxy.on('error', (err, _req, _res) => {
        //     console.log('proxy error', err);
        //   });
        //   proxy.on('proxyReq', (proxyReq, req, _res) => {
        //     console.log('Sending Request to the Target:', req.method, req.url);
        //   });
        //   proxy.on('proxyRes', (proxyRes, req, _res) => {
        //     console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
        //   });
        // },
      },
    },
  };
  return defineConfig(config);
};
