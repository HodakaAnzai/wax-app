// vite.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Viteの設定
export default defineConfig({
  plugins: [react()],
  base: '/wax-app/', 
});
