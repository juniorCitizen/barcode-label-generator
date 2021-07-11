import vue from '@vitejs/plugin-vue'
import path from 'path'
import {defineConfig} from 'vite'
import viteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteFonts({
      google: {
        families: [{name: 'Open Sans', styles: 'wght@300;400;600;700'}],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
