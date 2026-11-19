import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [],
    },
  },
  build: {
    target: "es2020",
    sourcemap: false,
    cssMinify: true,
  },
});
