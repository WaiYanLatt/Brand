import './assets/main.css'
import './assets/fontawesome-free-6.1.1-web/css/all.min.css'

import { createApp } from 'vue'
import router from '@/router/index.js'
import pinia from '@/stores/store.js'


import App from './App.vue'

createApp(App).use(pinia).use(router).mount('#app')
