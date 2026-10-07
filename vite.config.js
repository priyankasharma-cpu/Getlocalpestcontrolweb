import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Keep the expanded authored catalog separate from the React/UI bundle.
        manualChunks(id) {
          if (id.replaceAll("\\", "/").endsWith("/src/data/pestServices.js"))
            return "pest-catalog";
        },
      },
    },
  },
});
