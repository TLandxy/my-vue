import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { LazyPlugin } from "@/directives/index.js";





const app = createApp(App)

app.use(createPinia())
app.use(router)
//图片懒加载
app.use(LazyPlugin)

app.mount('#app')



