import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()], // Thêm plugin Vue vào Vite
  server: {
    port: 3001,
  },
});
