import img from '../../assets/images/logo.png'

export class Header {
  #header;

  constructor() {
    this.#header = document.createElement('div');
    this.#header.className = 'header';
  }

  render() {
    const title = document.createElement('h1');
    title.className = 'header__title';
    title.textContent = 'JavaScript Calendar';

    const logo = document.createElement('img');
    logo.className = 'header__image';
    logo.src = img;


    this.#header.append(title, logo);

    return this.#header;
  }
}