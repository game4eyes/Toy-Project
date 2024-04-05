import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 5174 // 포트를 5174로 설정
  },
  resolve: {
    // .js 및 .jsx 확장자 포함
    alias: [
      { find: /\.ts$/, replacement: '.ts' },
      { find: /\.tsx$/, replacement: '.tsx' },
    ]
  }
});