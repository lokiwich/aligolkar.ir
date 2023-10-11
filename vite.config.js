const { resolve } = require("path");
export default {
  plugins: [],
  server: {
    open: "/index.html",
    port: 3116,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ndmug: resolve(__dirname, "ndmug/index.html"),
        'sitemap.xml': resolve(__dirname, "sitemap.xml"),
      },
    },
  },
};
