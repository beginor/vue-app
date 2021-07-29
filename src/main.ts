import { createApp } from 'vue';

import './main.css';

import('./app/app.vue').then(m => {
    const elementId = 'app';
    const container = document.getElementById(elementId);
    if (!container) {
        throw new Error(`Element with id ${elementId} doesn't exists !`)
    }

    const vm = createApp(m.default, { msg: 'hello'});
    vm.mount(container);

}).catch(ex => {
    console.error(ex);
});
