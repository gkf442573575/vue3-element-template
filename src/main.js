import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './routes'

import store from './store'

createApp(App)
  .use(ElementPlus, {
    locale: zhCn
  })
  .use(router)
  .use(store)
  .mount('#app')
