import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //软连接
  resolve:{
    alias:{
      '@': join(__dirname,'/src')
    }
  },
  // 代理配置
  server : {
    proxy: {
      //指定代理的请求
      '/api':{
        //代理请求之后的地址
        target: 'https://api.imooc-front.lgdsunday.club/',
        //跨域配置
        changeOrigin: true
      }
    }
  }
})
