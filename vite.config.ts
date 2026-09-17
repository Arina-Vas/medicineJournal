import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/medicineJournal/',
  plugins: [react(),svgr({include: '**/*.svg',})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
