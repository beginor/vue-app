import './main.css';

import('./app/app').then(m => {
    const app = new m.App();
    app.run();
}).catch(ex => {
    console.error(ex);
});
