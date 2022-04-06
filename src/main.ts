import { createApp } from 'vue';

import App from './app.vue';

import './main.scss';

const elementId = 'app';
const container = document.getElementById(elementId);
if (!container) {
    throw new Error(`Element with id ${elementId} doesn't exists !`)
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App, { msg: 'Hello, Vue!' });
app.mount(container);
