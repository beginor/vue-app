import { createApp } from 'vue';

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
        vm.mount(this.container);
    }

}
