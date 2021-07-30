import { Header } from './header';
import { Timer } from './timer';
import { JS_CREATION_DATE } from '../core/constans/settings';

export default class App {
  #header;
  #timer;

  constructor() {
    this.#header = new Header();
    this.#timer = new Timer(JS_CREATION_DATE);
  }
  run() {
    const header = this.#header.render();
    const timer = this.#timer.render();
    document.getElementById('root').append(header, timer);
  }
}
