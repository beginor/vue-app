import './app.css';

export class App {

    /** app title */
    public title = 'Hello, Rollup !';

    constructor(private container: HTMLElement) { }

    /**
     * run the app.
     */
    public run(): void {
        this.container.innerHTML = `<h1>${this.title}</h1> hello, world!`;
        this.container.className = 'app-header';
    }

}
