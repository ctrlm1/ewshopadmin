import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import '@/style/tailwind.css'
import '@/style/index.css'

//导入 pinia
import {createPinia} from "pinia";

//创建pinia实例
const pinia = createPinia()
const app = createApp(App)


// 5. 创建并挂载根实例
app.use(router)
//挂载pinia
app.use(pinia)
app.mount('#app')
