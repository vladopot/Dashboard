import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'

// https://vite.dev/config/
export default defineConfig({
  base: '/Test_task/',
  plugins: [
    react(),
    Inspect()
  ],
})
