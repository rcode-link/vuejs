import PostIndex from './pages/post/index.vue';
import PostDetails from './pages/post/details.vue';
import Home from './pages/home.vue'
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/posts',
        component: PostIndex,
        name: 'post.index'
    },
    {
        path: '/post/:id',
        component: PostDetails,
        name: 'post.details'
    }
];


export default createRouter({
    history: createWebHashHistory(),
    routes,
})