import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import oxlintPlugin from 'vite-plugin-oxlint'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    oxlintPlugin({
      failOnWarning: false
    }),
    tailwindcss(),
  ],
})