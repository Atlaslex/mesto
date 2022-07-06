// Класс, отвечающий за отрисовку карточек на странице.
export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    addItem(item) {
        this._containerSelector.append(this._renderer(item));
    }

    renderItems() {
        this._items.forEach(item => {
            this.addItem(item);
        });
    }
}


