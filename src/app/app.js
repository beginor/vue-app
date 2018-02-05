export class App {

    constructor() { }

    run() {
        console.log('Hello, Rollup!');
    }

}
// this function will be treeshaked by rollup
export function test() {
    console.log('test');
}
