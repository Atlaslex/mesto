// Класс, отвечающий за отрисовку карточек на странице.
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
    this._container = document.querySelector(`.${this._containerSelector}`);
  }

  addItem(item) {
    this._container.append(this._renderer(item));
  }

  renderItems() {
    this._items.forEach(item => {
      this.addItem(item);
    });
  }

  prependItem(item) {
    const element = this._renderer(item);
    this._container.prepend(element);
  }

}


