// vite.config.js
import { defineConfig, loadEnv } from "file:///Users/LenMiller/code/inner-agility/tailwind-training/vitejs-latest/node_modules/.pnpm/vite@5.0.12/node_modules/vite/dist/node/index.js";
var vite_config_default = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const config = {
    esbuild: {
      minify: true
    },
    build: {
      lib: {
        entry: "./src/index.js",
        name: "web-components",
        fileName: (format) => `web-components.${format}.js`
      }
    },
    plugins: [],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3000/",
          //process.env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
        configure: (proxy, _options) => {
          proxy.on("error", (err, _req, _res) => {
            console.log("proxy error", err);
          });
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            console.log("Sending Request to the Target:", req.method, req.url);
          });
          proxy.on("proxyRes", (proxyRes, req, _res) => {
            console.log("Received Response from the Target:", proxyRes.statusCode, req.url);
          });
        }
      }
    }
  };
  return defineConfig(config);
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvTGVuTWlsbGVyL2NvZGUvaW5uZXItYWdpbGl0eS90YWlsd2luZC10cmFpbmluZy92aXRlanMtbGF0ZXN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvTGVuTWlsbGVyL2NvZGUvaW5uZXItYWdpbGl0eS90YWlsd2luZC10cmFpbmluZy92aXRlanMtbGF0ZXN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9MZW5NaWxsZXIvY29kZS9pbm5lci1hZ2lsaXR5L3RhaWx3aW5kLXRyYWluaW5nL3ZpdGVqcy1sYXRlc3Qvdml0ZS5jb25maWcuanNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pID0+IHtcbiAgcHJvY2Vzcy5lbnYgPSB7IC4uLnByb2Nlc3MuZW52LCAuLi5sb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpIH07XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBlc2J1aWxkOiB7XG4gICAgICBtaW5pZnk6IHRydWUsXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgbGliOiB7XG4gICAgICAgIGVudHJ5OiAnLi9zcmMvaW5kZXguanMnLFxuICAgICAgICBuYW1lOiAnd2ViLWNvbXBvbmVudHMnLFxuICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYHdlYi1jb21wb25lbnRzLiR7Zm9ybWF0fS5qc2AsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW10sXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaSc6IHtcbiAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJywvL3Byb2Nlc3MuZW52LlZJVEVfQVBJX0JBU0VfVVJMLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICBzZWN1cmU6IGZhbHNlLFxuICAgICAgICAgIC8vIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyZTogKHByb3h5LCBfb3B0aW9ucykgPT4ge1xuICAgICAgICAgIHByb3h5Lm9uKCdlcnJvcicsIChlcnIsIF9yZXEsIF9yZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm94eSBlcnJvcicsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcHJveHkub24oJ3Byb3h5UmVxJywgKHByb3h5UmVxLCByZXEsIF9yZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIFJlcXVlc3QgdG8gdGhlIFRhcmdldDonLCByZXEubWV0aG9kLCByZXEudXJsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwcm94eS5vbigncHJveHlSZXMnLCAocHJveHlSZXMsIHJlcSwgX3JlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIFJlc3BvbnNlIGZyb20gdGhlIFRhcmdldDonLCBwcm94eVJlcy5zdGF0dXNDb2RlLCByZXEudXJsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGRlZmluZUNvbmZpZyhjb25maWcpO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxTQUFTLGNBQWMsZUFBZTtBQUd0QyxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDM0IsVUFBUSxNQUFNLEVBQUUsR0FBRyxRQUFRLEtBQUssR0FBRyxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUMsRUFBRTtBQUNoRSxRQUFNLFNBQVM7QUFBQSxJQUNiLFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsUUFDSCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsV0FBVyxrQkFBa0IsTUFBTTtBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUyxDQUFDO0FBQUEsSUFDVixRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFFBQVE7QUFBQTtBQUFBLFFBRVY7QUFBQSxRQUNBLFdBQVcsQ0FBQyxPQUFPLGFBQWE7QUFDOUIsZ0JBQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxNQUFNLFNBQVM7QUFDckMsb0JBQVEsSUFBSSxlQUFlLEdBQUc7QUFBQSxVQUNoQyxDQUFDO0FBQ0QsZ0JBQU0sR0FBRyxZQUFZLENBQUMsVUFBVSxLQUFLLFNBQVM7QUFDNUMsb0JBQVEsSUFBSSxrQ0FBa0MsSUFBSSxRQUFRLElBQUksR0FBRztBQUFBLFVBQ25FLENBQUM7QUFDRCxnQkFBTSxHQUFHLFlBQVksQ0FBQyxVQUFVLEtBQUssU0FBUztBQUM1QyxvQkFBUSxJQUFJLHNDQUFzQyxTQUFTLFlBQVksSUFBSSxHQUFHO0FBQUEsVUFDaEYsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxTQUFPLGFBQWEsTUFBTTtBQUM1QjsiLAogICJuYW1lcyI6IFtdCn0K
