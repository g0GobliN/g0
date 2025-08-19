import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/g0/' : '/',
 // Replace 'g0' with your exact GitHub repo name
  plugins: [react()],
});