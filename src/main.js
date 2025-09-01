import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Importa Bootstrap JS si lo necesitas
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Importa tus estilos Sass
import './assets/scss/main.scss'

const pinia = createPinia();
const app = createApp(App);
app.use(router).use(pinia).mount('#app')
