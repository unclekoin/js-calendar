import { JSBlock } from './js-block';
import { Timer } from './timer';

export default class App {
  #jsBlock;
  #timer;

  constructor() {
    this.#jsBlock = new JSBlock();
    this.#timer = new Timer(new Date());
  }
  run() {
    const jsBlockHTML = this.#jsBlock.render();
    const timer = this.#timer.render();
    document.body.append(jsBlockHTML, timer);
  }
}
