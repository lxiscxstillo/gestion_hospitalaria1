import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Configure a dev proxy to avoid CORS: /api -> backend target
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiBase = env.VITE_API_BASE || 'http://localhost:8081/api'
  const target = apiBase.replace(/\/api$/, '')

  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target,
          changeOrigin: true
        }
      }
    }
  }
})
