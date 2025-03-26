import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  
  // 设置应用的基础路径为 /tomato-work/
  base: '/tomato-work/',

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },

  server: {
    port: 7001,
    proxy: {
      '/api/passport': {
        target: 'http://localhost:7003',
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: 'build',
  },
})
