import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-gif--expert-ezg/', // Cambia esto a tu ruta base en GitHub Pages
});
