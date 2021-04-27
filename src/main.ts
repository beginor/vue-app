import './main.css';

import('./app/app').then(m => {
    var app = new m.App();
    app.run();
}).catch(ex => {
    console.error(ex);
});
