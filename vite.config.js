import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path agar bisa jalan di Vercel, GitHub Pages, maupun hosting apa pun
  server: {
    host: true,
    port: 3000,
    strictPort: true
  }
})
