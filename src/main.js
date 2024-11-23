import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap"
import './styles/style.scss';
import router from './router/router.js';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';



// Create the Vue app instance
const app = createApp(App);

app.use(router);
app.use(PerfectScrollbarPlugin);
app.mount('#app');