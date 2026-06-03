<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

>>>>>>> 6b82e306feba589c6fbf283b723295def5b493dd
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});