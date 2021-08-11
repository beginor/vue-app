import { createApp } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


import app from './app.vue';

import './app.scss';

export class App {

    /** app title */
    public title = 'Hello, Rollup !';

    constructor(private container: HTMLElement) { }

    /**
     * run the app.
     */
    public run(): void {
        const vm = createApp(app, { msg: 'hello' });
        const router = createRouter({
            history: createWebHashHistory(),
            routes: [
                {
                    path: '/', component: { template: '<h2>Home</h2>' }
                },
                {
                    path: '/about', component: { template: '<h2>About</h2>' }
                }
            ]
        });
        vm.use(router);
        vm.mount(this.container);
    }

}
