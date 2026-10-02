import { defineConfig } from 'vite'
import { sign } from 'crypto';
import { resolve } from 'path'
// import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import build from 'next/dist/build';
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
   
  ],
  buil: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // about: resolve(__dirname, 'pages/about/index,html'),
        services: resolve(__dirname, 'pages/services/index.html'),
        projects: resolve(__dirname, 'pages/projects/index.html'),
        blog: resolve(__dirname, 'pages/blog/index.html'),
        contact: resolve(__dirname, 'pages/contact/index.html'),
      
      
      }
    }
    
  }
})
