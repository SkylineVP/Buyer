import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_APP_PORT ?? "3000"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
