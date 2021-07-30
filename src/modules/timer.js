export class Timer {
  #date;
  #container;
  #text;
  
  constructor(date) {
    this.#date = date;
    this.#container = document.createElement('div');
    this.#text = document.createElement('h2');
  }

  render() {
    this.#container.id = 'timer';
    this.#text.className = 'timer-text'
    this.#text.textContent = 'Time';

    const todayDate = document.createElement('div');
    todayDate.className = 'today-date';
    todayDate.textContent = new Date();

    this.#container.append(this.#text, todayDate);

    return this.#container;
  }
}