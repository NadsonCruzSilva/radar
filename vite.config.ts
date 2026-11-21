import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { inlineForFileProtocol } from './vite-plugins/inline-for-file-protocol.ts'

export default defineConfig(({ mode }) => ({
  base: './',
  cacheDir: `node_modules/.vite-${mode}`,
  plugins: [react(), tailwindcss(), inlineForFileProtocol()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
}))
