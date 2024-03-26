import pkg from "vite";
import vue from "@vitejs/plugin-vue";

const { defineConfig } = pkg;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/index.js",
      formats: ["es", "cjs"],
      name: "vue-introjs",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
