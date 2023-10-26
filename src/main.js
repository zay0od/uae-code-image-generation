import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vuesax from 'vuesax-alpha'
import 'vuesax-alpha/dist/vuesax.css'

const app = createApp(App)

app.use(router).use(vuesax)
app.mount('#app')
