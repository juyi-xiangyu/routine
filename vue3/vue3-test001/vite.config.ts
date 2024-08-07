/*
 * @Description: 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/test', // 开发或生产环境服务的公共基础路径
  // root: './' // 项目的根目录 也就是index.html所在的位置
  mode: 'production',
  // publicDir: false
})
