import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/agent/", // Set the base path for GitHub Pages deployment
  plugins: [react()],
})
