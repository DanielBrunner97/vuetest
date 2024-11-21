import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap"
import './styles/style.scss';
import router from './router/router.js';



// Create the Vue app instance
const app = createApp(App);

app.use(router);

app.mount('#app');