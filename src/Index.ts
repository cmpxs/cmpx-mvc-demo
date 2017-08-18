import { MvcBrowser } from 'cmpx-mvc';
import { AppController } from './demo/controllers/appController';
import App from './demo/views/app/app';

let promise:any = require('es6-promise');
promise.polyfill();

console.time('boot');
//new Browser().boot(AppComponet);
new MvcBrowser().bootFromController(AppController, App);
console.timeEnd('boot');
