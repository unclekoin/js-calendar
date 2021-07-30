import * as DateUtils from '../core/utils/date';
export class Timer {
  #date;
  #container;
  #text;
  
  constructor(date) {
    this.#date = date;
    this.#container = document.createElement('div');
    this.#text = document.createElement('div');
  }

  #getTimerContent() {
    return DateUtils.getPreciseDateDifference(new Date(), this.#date);
  }

  #dateUpdate() {
    setInterval(() => {
      this.#text.textContent = this.#getTimerContent();
    }, 1000);
  }

  render() {
    this.#container.className = 'timer';
    this.#text.className = 'timer__text'
    this.#text.textContent = this.#getTimerContent();

    const todayDate = document.createElement('div');
    todayDate.className = 'timer__today';
    todayDate.textContent = `Today's ${DateUtils.getDate(new Date())}`;

    const staticText = document.createElement('div');
    staticText.className = 'timer__text'
    staticText.textContent = 'have passed since the creation of the JavaScript';

    this.#container.append(todayDate, this.#text, staticText);
    this.#dateUpdate();

    return this.#container;
  }
}