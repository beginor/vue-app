import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import antDv from 'ant-design-vue';

import App from './app.vue';
import { routes } from './app-routes';

import './main.scss';

const elementId = 'app';
const container = document.getElementById(elementId);
if (!container) {
    throw new Error(`Element with id ${elementId} doesn't exists !`)
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App, { msg: 'Hello, Vue!' });
app.use(antDv);
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
app.use(router);
app.mount(container);
