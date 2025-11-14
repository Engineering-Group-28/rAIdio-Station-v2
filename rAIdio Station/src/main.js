import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router"
import './assets/main.css'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = router; // You can also use `markRaw(router)` for SSR [1, 3]
});

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
