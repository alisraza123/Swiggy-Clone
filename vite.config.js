import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Removed `@tailwindcss/vite`
export default defineConfig({
  plugins: [react()],
})
