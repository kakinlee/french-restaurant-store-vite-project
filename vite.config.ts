import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vite-project/',
  build: {
    outDir: 'dist', // 輸出目錄為 docs
  },
})
