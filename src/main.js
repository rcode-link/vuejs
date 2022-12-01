import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import {fetch_users} from './utils/users.js';


createApp(App)
    .use(router)
    .provide('users', fetch_users())
    .mount('#app');