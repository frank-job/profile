import { resolve } from 'node:path';
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'pages/about/index.html'),
        services: resolve(import.meta.dirname, 'pages/services/index.html'),
        projects: resolve(import.meta.dirname, 'pages/projects/index.html'),
        contact: resolve(import.meta.dirname, 'pages/contact/index.html'),
      },
    },
  },
})