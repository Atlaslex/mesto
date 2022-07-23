// Класс, отвечающий за отрисовку карточек на странице.
export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(`.${this._containerSelector}`);
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }

  renderItems(cards) {
    cards.forEach(item => {
      this.addItem(item);
    });
  }

  prependItem(item) {
    const element = this._renderer(item);
    this._container.prepend(element);
  }

}


