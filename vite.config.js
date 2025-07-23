import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Replace 'g0' with your exact GitHub repo name
  plugins: [react()],
})
