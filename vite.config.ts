import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  base: '/Personal_Finance_App/',
  resolve: {
    alias: {
      '@': '/src',          // 確認你的 @ 指向 src
    },
  },

});
