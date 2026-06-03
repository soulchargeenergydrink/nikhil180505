import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <--- Add this compiler bridge!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // <--- Inject the style processing engine!
  ],
  server: {
    port: 5173,
    host: true
  }
});