import img from '../../assets/images/logo.png'

export class JSBlock {
  #container;

  constructor() {
    this.#container = document.createElement('div');
    this.#container.className = 'js-block';
  }

  render() {
    const title = document.createElement('h1');
    title.className = 'mait-title';
    title.textContent = 'JavaScript';

    const logo = document.createElement('img');
    logo.className = 'js-image';
    logo.src = img;

    const text = document.createElement('p');
    text.className = 'founded-text'
    text.textContent = 'Since the creation of JavaScript:';

    this.#container.append(title, logo, text);

    return this.#container;
  }
}