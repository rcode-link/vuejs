import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import {fetch_users} from './utils/users.js';


const users = await fetch_users();

createApp(App)
    .use(router)
    .provide('users', users)
    .mount('#app');