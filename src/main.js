import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Basebutton from './components/Basebutton.vue'

const app = createApp(App)
app.component('base-button', Basebutton)
app.use(router).mount('#app')
    // const app = createApp(App)
    // app.use(router).mount('#app')