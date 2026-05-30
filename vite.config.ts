import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  // GitHub Pages serves the site at /<repo>/, so we need a matching base for
  // assets to resolve correctly in production. In dev we keep "/" for clarity.
  base: process.env.GITHUB_PAGES === "true" ? "/maturix/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5180,
    host: true,
  },
});
