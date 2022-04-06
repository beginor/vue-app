import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/home', },
    { path: '/home', component: () => import('./pages/home.vue') },
    { path: '/about', component: () => import('./pages/about.vue') }
];

export { routes };
