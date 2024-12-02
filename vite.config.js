import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import basicSsl from '@vitejs/plugin-basic-ssl';


export default defineConfig({
  plugins: [react()],
  server: {
    https: false, // Tắt HTTPS
    port: 5173, // Đảm bảo cổng là 5173
    open: true, // Mở trình duyệt tự động
    hmr: {
      protocol: 'ws', // Sử dụng WebSocket qua HTTP
      host: 'localhost',
      port: 5173,
    },
  },
});


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), basicSsl()],
//   server: {
//     https: false, // Bật HTTPS
//     open: true, // Mở trình duyệt tự động
//     watch: {
//       ignored: ['**/node_modules/**'], // Bỏ qua thư mục không cần theo dõi
//       delay: 300, // Thời gian chờ trước khi thực hiện HMR (tính bằng ms)
//     },
//     hmr: {
//       logLevel: 'warn', // Giảm mức độ log của HMR
//       clientPort: 443, // Cổng client khi sử dụng HTTPS
//     },
//     proxy: {
//       // Nếu bạn cần proxy yêu cầu đến API
//       '/api': {
//         target: 'https://localhost:7065', // Địa chỉ API của bạn
//         changeOrigin: true,
//         secure: false, // Nếu sử dụng HTTPS và không có chứng chỉ hợp lệ
//       },
//     },
//   },
// });
