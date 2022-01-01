import { RouteRecordRaw } from 'vue-router';

const appRoutes: RouteRecordRaw[] = [
    { path: '/', redirect: '/home', },
    { path: '/home', component: () => import('./pages/home.vue') },
    { path: '/about', component: () => import('./pages/about.vue') },
    { path: '/timer', component: () => import('./pages/timer.vue') },
    { path: '/layout', component: () => import('./pages/layout-page.vue') }
];

export { appRoutes };
