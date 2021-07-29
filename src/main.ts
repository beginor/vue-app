import './main.scss';

import('./app/app').then(m => {
    const elementId = 'app';
    const container = document.getElementById(elementId);
    if (!container) {
        throw new Error(`Element with id ${elementId} doesn't exists !`)
    }
    const app = new m.App(container);
    app.run();
}).catch(ex => {
    console.error(ex);
});
