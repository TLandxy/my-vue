import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { LazyPlugin } from "@/directives/index.js";

import { componentPlugin } from './components'





const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
//图片懒加载 
app.use(LazyPlugin)
app.use(componentPlugin)

app.mount('#app')



