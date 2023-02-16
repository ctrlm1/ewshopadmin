import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import '@/style/tailwind.css'
import '@/style/index.css'


const app = createApp(App)
// 5. 创建并挂载根实例
app.use(router)
app.mount('#app')
