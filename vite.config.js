import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    outDir: "./public/build/",
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ["lodash"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/resources/js",
    },
  },
  plugins: [
    laravel({
      input: "resources/js/app.ts",
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
});
