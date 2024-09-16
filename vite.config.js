import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Mở trình duyệt tự động
    watch: {
      ignored: ['**/node_modules/**'], // Bỏ qua thư mục không cần theo dõi
      delay: 300, // Thời gian chờ trước khi thực hiện HMR (tính bằng ms)
    },
    hmr: {
      // Disable verbose logging of HMR events
      logLevel: 'warn', // options: 'info', 'warn', 'error'
    },
  },
})
