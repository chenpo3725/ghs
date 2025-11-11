import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ghs/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000 // Optional: to handle the chunk size warning
  }
})